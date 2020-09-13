function kmp(source, pattern) {

    if (pattern === "") {
        return 0;
    }

    let table = new Array(pattern.length).fill(0);
    /* 
        i 匹配位置的指针 j匹配重复度的指针
        pattern[i] === pattern[j] 是关键所有操作都围绕这个等式来执行
    */
    {
        let i = 1; j = 0;
        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                // j永远在i前面
                // table[i]最大值为i - 1
                // 只有匹配到了相同j才会进位，同时i也要进位匹配下一位
                i++, j++;
                //虽然匹配相等的是i位置 但是我们找的是找前一个节点的重复度所以 实际就是匹配相等时j位置的长度即j位置下表 + 1写在i下一位的table中 换句话说就是当前位重复位字符数存在下一位的table中;
                table[i] = j;
            } else {
                if (j > 0) {
                    // 但是如果j不在0的位置说明重复部分还包含重复的 ！！！
                    // 所以实际上退回的table[j]是比较重复部分的重复部分是否和现在相同  ！！！非常非常精巧的设计
                    j = table[j];
                } else {
                    // 当j在第一位时我们匹配到某一位不相等时 i进位再匹配，
                    //相应的table值因为初始化是赋值为0了所以不用管 否则这里其实应该table[++i] = 0
                    i++;
                }
            }
        }
    }
    {
        let i = 0; j = 0;
        while (i < source.length) {

            if (pattern[j] === source[i]) {
                i++; j++;
            } else {
                if (j > 0) {
                    j = table[j];
                } else {
                    i++;
                }
            }
            if (j === pattern.length) {
                //匹配的具体位置 
                return i-j;
            }
        }
        return -1;
    }

}
let result = kmp("mississippi", "issip");
console.log(result);
