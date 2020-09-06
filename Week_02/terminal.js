let regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g

let dictionary = ["Number", "Whitespace", "LineTerminaltor", "*", "/", "+", "-"];

function* tokenize(source) {
    let result = null;
    let lastIndex = null;
    while (true) {
        lastIndex = regexp.lastIndex;
        result = regexp.exec(source);

        if (!result) {
            break;
        }

        if (result.lastIndexOf - lastIndex > result[0].length) {
            break;
        }

        let token = {
            type: null,
            value: null,
        }

        for (let i = 1; i < dictionary.length; i++) {
            if (result[i]) {
                token.type = dictionary[i - 1];
            }
        }
        token.value = result[0];
        yield token;
    }

    yield { type: "EOF" };
}

// tokenize("1024 + 10 * 25");
let source = [];

for (let token of tokenize("1 +  2 +  3")) {
    if (token.type !== 'Whitespace' && token.type !== 'LineTerminaltor') {
        source.push(token);
    }
}


function Expression(source) {
    if (source[0].type === "AdditiveExpression" && source[1] && source[1].type === "EOF"){
        let node = {
            type:"Expression",
            children:[source.shift(),source.shift()],
        }
        source.unshift(node);
        return node;
    }
    AdditiveExpression(source);
    return Expression(source);
}

//加减法
function AdditiveExpression(source) {
    if (source[0].type === "MultiplicativeExpression") {
        let node = {
            type: "AdditiveExpression",
            children: [source[0]],
        }
        source[0] = node;
        return AdditiveExpression(source);
    }
    if (source[0].type === "AdditiveExpression" && source[1] && ['+', '-'].includes(source[1].type)) {
        let node = {
            type: "AdditiveExpression",
            operation: source[1],
            children: [],
        }
        node.children.push(source.shift());
        node.children.push(source.shift());
        MultiplicativeExpression(source);
        node.children.push(source.shift());
        source.unshift(node);
        return AdditiveExpression(source);
    }
    if (source[0].type === "AdditiveExpression") {
        return source[0];
    }
    MultiplicativeExpression(source);
    return AdditiveExpression(source);

}

//乘除法
function MultiplicativeExpression(source) {
    if (source[0].type === "Number") {
        let node = {
            type: "MultiplicativeExpression",
            children: [source[0]],
        }
        source[0] = node;
        return MultiplicativeExpression(source);
    }
    if (source[0].type === "MultiplicativeExpression" && source[1] && ['*', '/'].includes(source[1].type)) {
        let node = {
            type: "MultiplicativeExpression",
            operation: source[1],
            children: [],
        }
        node.children.push(source.shift());
        node.children.push(source.shift());
        node.children.push(source.shift());
        source.unshift(node);
        return MultiplicativeExpression(source);

    }
    if (source[0].type === "MultiplicativeExpression") {
        return source[0];
    }
    return "DONT KNOW";
}

let a = Expression(source);
console.log(a);