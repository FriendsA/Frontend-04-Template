


function string2Utf8(str) {
    let tableArr = {
        1: ['0000', '007F'],
        2: ['0080', '07FF'],
        3: ['0800', 'FFFF'],
        4: ['10000', '1FFFFF'],
        5: ['200000', '3FFFFFF'],
        6: ['4000000', '7FFFFFFF'],
    }
    /* 
        每个字符的字节数和二进制码值对象数组
        [{
            num:字节数，
            code:二进制码值，
        }]
    */
    let codeData = [];
    // UTF8编码二进制码值数组
    let resultArr = [];


    for (let i = 0; i < str.length; i++) {
        let temp = str[i].charCodeAt(0);
        for (let j in tableArr) {
            if (temp >= parseInt(tableArr[j][0], 16) && temp <= parseInt(tableArr[j][1], 16)) {
                codeData.push({
                    num: j,
                    code: temp.toString(2),
                })
            }
        }
    }


    for (let i = 0; i < codeData.length; i++) {
        let { code, num } = codeData[i];
        let codeList = code.split("");
        let tailItem = [];
        if (num === 1) {
            for (let j = 0; j < 8; j++) {
                if (codeList.length > 0) {
                    tailItem.unshift(codeList.pop());
                } else {
                    tailItem.unshift("0");
                }
            }
            resultArr.push(tailItem);
        } else {
            //剩下的8 bit
            for (let j = 0; j < (num - 1) * 6; j++) {
                //6位 补10
                if (j !== 0 && j % 6 === 0) {
                    tailItem.unshift('10')
                }
                if (codeList.length > 0) {
                    tailItem.unshift(codeList.pop());
                } else {
                    tailItem.unshift("0");
                }
            }
            tailItem.unshift('10');


            //第一个8 bit
            let topItem = new Array(8).fill("1");
            for (let k = 7; k > num - 1; k--) {
                if (codeList.length > 0) {
                    topItem[k] = codeList.pop();
                } else {
                    topItem[k] = "0";
                }
            }
            let string = topItem.concat(tailItem).toString().replace(/\,/g, "");
            resultArr.push(string);
        }
    }
    console.log(resultArr);
    return resultArr;
}
string2Utf8('中国人');