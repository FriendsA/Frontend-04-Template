

function find(source, pattern) {
    //思想是把字符串拆分为  xxx  *xxx *xxx ...  *xxx 来处理
    //查找*号数量
    let startCount = 0;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "*") {
            startCount++;
        }
    }

    //没有星号完全匹配
    if (startCount === 0) {
        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== "?") {
                return false;
            }
        }
        return true;
    }


    //第一个*号前的部分
    //pattern 的指针
    let i = 0;
    //source 的指针
    let lastIndex = 0;
    for (; pattern[i] !== '*'; i++) {
        if (pattern[i] !== source[i] && pattern[i] !== "?") {
            return false;
        }
    }

    lastIndex = i;

    for (let j = 0; j < startCount - 1; j++) {
        i++;
        let substr = "";
        while (pattern[i] !== "*") {
            substr += pattern[i];
            i++;
        }

        let reg = new RegExp(substr.replace(/\?/g, "[\\s\\S]"), "g");

        reg.lastIndex = lastIndex;

        if (!reg.exec(source)) {
            return false;
        }

        lastIndex = reg.lastIndex;

    }
    //处理最后一段
    let len = pattern.length;
    let sou = source.length;
    for (let j = 0; j >= sou - len && pattern[len - j] !== "*"; j++) {
        if (pattern[len - j] !== source[sou - j] && pattern[len - j] !== "?") {
            return false;
        }
    }

    return true;
}

find("aaa", "a*b*bx*c");

//kmp 代替正则