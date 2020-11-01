
function match(selector, element) {
    /**
     * 思考：
     * 1.复杂选择器的解析 利用状态机
     * 2.从跟元素开始遍历DOM树匹配选择器 (广度遍历 or 深度遍历)
     * 3.好难
    */


    return true;
}


match("div #id.class", document.getElementById("id"));