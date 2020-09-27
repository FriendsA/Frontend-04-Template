function StringToNumber(str) {
    let num = 0;
    let arr = str.slice(2).split("");
    let len = arr.length - 1;
    if (str.includes('0b')) {
        //二进制
        for (let i = 0; i < arr.length; i++, len--) {
            num += arr[i] * 2 ** len;
        }
        return num;
    } else if (str.includes("0o")) {
        //八进制
        for (let i = 0; i < arr.length; i++, len--) {
            num += arr[i] * 8 ** len;
        }
        return num;
    } else if (str.includes('0x')) {
        //十六进制
        let obj = { "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 };
        for (let i = 0; i < arr.length; i++, len--) {
            if (obj[arr[i]]) {
                arr[i] = obj[arr[i]];
            }
            num += arr[i] * 16 ** len;
        }
        return num;
    } else {
        //十进制
        let arr = str.split("");
        let len = arr.length - 1;
        for (let i = 0; i < arr.length; i++, len--) {
            num += arr[i] * 10 ** len;
        }
        return num;
    }
}

function NumberToString(num, flag) {
    let number = num;
    let arr = [];
    //根据进制转换
    if (flag === 16) {
        let obj = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
        while (number > 0) {
            let temp = number % 16;
            if (temp > 9) {
                temp = obj[temp];
            }
            arr.unshift(temp);
            number = Math.floor(number / 16)
        }
        return '0x' + arr.toString().replaceAll(',', '');
    } else if (flag === 10) {
        while (number > 0) {
            arr.unshift(number % 10);
            number = Math.floor(number / 10)
        }
        return arr.toString().replaceAll(',', '');
    } else if (flag === 8) {
        while (number > 0) {
            arr.unshift(number % 8);
            number = Math.floor(number / 8)
        }
        return '0o'+arr.toString().replaceAll(',', '');
    } else if (flag === 2) {
        while (number > 0) {
            arr.unshift(number % 2);
            number = Math.floor(number / 2)
        }
        return '0b' + arr.toString().replaceAll(',', '');
    }
}

