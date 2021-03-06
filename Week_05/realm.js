// 定义数据源
const data = {
    // 点集
    nodes: [
        { id: 'node1', label: "global objects", x: 100, y: 500, },
        { id: 'node1-1', label: "值属性", x: 200, y: 200, },
        { id: 'node1-2', label: "函数属性", x: 200, y: 300, },
        { id: 'node1-3', label: "基本对象", x: 200, y: 400, },
        { id: 'node1-4', label: "数字和日期对象", x: 200, y: 500, },
        { id: 'node1-5', label: "字符串", x: 200, y: 600, },
        { id: 'node1-6', label: "使用键的集合对象", x: 200, y: 700, },
        { id: 'node1-7', label: "结构化数据", x: 200, y: 800, },
        { id: 'node1-8', label: "控制抽象对象", x: 200, y: 900, },
        { id: 'node1-9', label: "反射", x: 200, y: 1000, },
        { id: 'node1-10', label: "国际化", x: 200, y: 1100, },
        { id: 'node1-11', label: "WebAssembly", x: 200, y: 1200, },
        { id: 'node1-12', label: "其他", x: 200, y: 1300, },
        { id: 'node1-1-1', label: "Infinity", x: 300, y: 100, },
        { id: 'node1-1-2', label: "NaN", x: 350, y: 120, },
        { id: 'node1-1-3', label: "undefined", x: 400, y: 150, },
        { id: 'node1-1-4', label: "globalThis", x: 450, y: 170, },
        { id: 'node1-2-1', label: "eval()", x: 300, y: 250, },
        { id: 'node1-2-2', label: "uneval()", x: 350, y: 270, },
        { id: 'node1-2-3', label: "isFinite()", x: 400, y: 250, },
        { id: 'node1-2-4', label: "isNaN()", x: 450, y: 270, },
        { id: 'node1-2-5', label: "parseFloat()", x: 500, y: 250, },
        { id: 'node1-2-6', label: "parseInt()", x: 550, y: 270, },
        { id: 'node1-2-7', label: "decodeURI()", x: 600, y: 250, },
        { id: 'node1-2-8', label: "decodeURIComponent()", x: 700, y: 270, },
        { id: 'node1-2-9', label: "encodeURI()", x: 800, y: 250, },
        { id: 'node1-2-10', label: "encodeURIComponent()", x: 850, y: 270, },
        { id: 'node1-3-1', label: "Object", x: 300, y: 350, },
        { id: 'node1-3-2', label: "Function", x: 350, y: 370, },
        { id: 'node1-3-3', label: "Boolean", x: 400, y: 350, },
        { id: 'node1-3-4', label: "Symbol", x: 450, y: 370, },
        { id: 'node1-3-5', label: "错误对象", x: 300, y: 410, },
        { id: 'node1-3-5-1', label: "Error", x: 500, y: 400, },
        { id: 'node1-3-5-2', label: "AggregateError", x: 550, y: 420, },
        { id: 'node1-3-5-3', label: "EvalError", x: 600, y: 400, },
        { id: 'node1-3-5-4', label: "InternalError", x: 650, y: 420, },
        { id: 'node1-3-5-5', label: "RangeError", x: 700, y: 400, },
        { id: 'node1-3-5-6', label: "ReferenceError", x: 750, y: 420, },
        { id: 'node1-3-5-7', label: "SyntaxError", x: 800, y: 400, },
        { id: 'node1-3-5-8', label: "TypeError", x: 850, y: 420, },
        { id: 'node1-3-5-9', label: "URIError", x: 900, y: 400, },
        { id: 'node1-4-1', label: "Number", x: 300, y: 450, },
        { id: 'node1-4-2', label: "BigInt", x: 350, y: 470, },
        { id: 'node1-4-3', label: "Math", x: 400, y: 450, },
        { id: 'node1-4-4', label: "Date", x: 450, y: 470, },
        { id: 'node1-5-1', label: "String", x: 300, y: 550, },
        { id: 'node1-5-2', label: "RegExp", x: 350, y: 570, },
        { id: 'node1-6-1', label: "Int8Array", x: 300, y: 650, },
        { id: 'node1-6-2', label: "Uint8Array", x: 350, y: 670, },
        { id: 'node1-6-3', label: "Uint8ClampedArray", x: 400, y: 650, },
        { id: 'node1-6-4', label: "Int16Array", x: 450, y: 670, },
        { id: 'node1-6-5', label: "Uint16Array", x: 500, y: 650, },
        { id: 'node1-6-6', label: "Int32Array", x: 550, y: 670, },
        { id: 'node1-6-7', label: "Uint32Array", x: 600, y: 650, },
        { id: 'node1-6-8', label: "Float32Array", x: 650, y: 670, },
        { id: 'node1-6-9', label: "Float64Array", x: 700, y: 650, },
        { id: 'node1-6-10', label: "BigInt64Array", x: 750, y: 670, },
        { id: 'node1-6-11', label: "BigUint64Array", x: 800, y: 650, },
        { id: 'node1-7-1', label: "Map", x: 300, y: 750, },
        { id: 'node1-7-2', label: "Set", x: 350, y: 770, },
        { id: 'node1-7-3', label: "WeakMap", x: 400, y: 750, },
        { id: 'node1-7-4', label: "WeakSet", x: 450, y: 770, },
        { id: 'node1-8-1', label: "ArrayBuffer", x: 300, y: 850, },
        { id: 'node1-8-2', label: "SharedArrayBuffer", x: 350, y: 870, },
        { id: 'node1-8-3', label: "Atomics", x: 400, y: 850, },
        { id: 'node1-8-4', label: "DataView", x: 450, y: 870, },
        { id: 'node1-8-5', label: "JSON", x: 500, y: 850, },
        { id: 'node1-9-1', label: "Reflect", x: 300, y: 950, },
        { id: 'node1-9-2', label: "Proxy", x: 350, y: 970, },
        { id: 'node1-10-1', label: "Intl", x: 300, y: 1050, },
        { id: 'node1-10-2', label: "Intl.Collator", x: 350, y: 1070, },
        { id: 'node1-10-3', label: "Intl.DateTimeFormat", x: 450, y: 1050, },
        { id: 'node1-10-4', label: "Intl.ListFormat", x: 550, y: 1070, },
        { id: 'node1-10-5', label: "Intl.NumberFormat", x: 650, y: 1050, },
        { id: 'node1-10-6', label: "Intl.PluralRules", x: 750, y: 1070, },
        { id: 'node1-10-7', label: "Intl.RelativeTimeFormat", x: 850, y: 1050, },
        { id: 'node1-10-8', label: "Intl.Locale", x: 950, y: 1070, },
        { id: 'node1-11-1', label: "WebAssembly", x: 300, y: 1150, },
        { id: 'node1-11-2', label: "WebAssembly.Module", x: 350, y: 1170, },
        { id: 'node1-11-3', label: "WebAssembly.Instance", x: 450, y: 1150, },
        { id: 'node1-11-4', label: "WebAssembly.Memory", x: 550, y: 1170, },
        { id: 'node1-11-5', label: "WebAssembly.Table", x: 650, y: 1150, },
        { id: 'node1-11-6', label: "WebAssembly.CompileError", x: 750, y: 1170, },
        { id: 'node1-11-7', label: "WebAssembly.LinkError", x: 850, y: 1150, },
        { id: 'node1-11-8', label: "WebAssembly.RuntimeError", x: 950, y: 1170, },
        { id: 'node1-12-1', label: "arguments", x: 300, y: 1250, },
    


    ],
    // 边集
    edges: [
        { source: 'node1', target: 'node1-1', },
        { source: 'node1', target: 'node1-2', },
        { source: 'node1', target: 'node1-3', },
        { source: 'node1', target: 'node1-4', },
        { source: 'node1', target: 'node1-5', },
        { source: 'node1', target: 'node1-6', },
        { source: 'node1', target: 'node1-7', },
        { source: 'node1', target: 'node1-8', },
        { source: 'node1', target: 'node1-9', },
        { source: 'node1', target: 'node1-10', },
        { source: 'node1', target: 'node1-11', },
        { source: 'node1', target: 'node1-12', },
        { source: 'node1-1', target: 'node1-1-1', },
        { source: 'node1-1', target: 'node1-1-2', },
        { source: 'node1-1', target: 'node1-1-3', },
        { source: 'node1-1', target: 'node1-1-4', },
        { source: 'node1-2', target: 'node1-2-1', },
        { source: 'node1-2', target: 'node1-2-2', },
        { source: 'node1-2', target: 'node1-2-3', },
        { source: 'node1-2', target: 'node1-2-4', },
        { source: 'node1-2', target: 'node1-2-5', },
        { source: 'node1-2', target: 'node1-2-6', },
        { source: 'node1-2', target: 'node1-2-7', },
        { source: 'node1-2', target: 'node1-2-8', },
        { source: 'node1-2', target: 'node1-2-9', },
        { source: 'node1-2', target: 'node1-2-10', },
        { source: 'node1-3', target: 'node1-3-1', },
        { source: 'node1-3', target: 'node1-3-2', },
        { source: 'node1-3', target: 'node1-3-3', },
        { source: 'node1-3', target: 'node1-3-4', },
        { source: 'node1-3', target: 'node1-3-5', },
        { source: 'node1-3-5', target: 'node1-3-5-1', },
        { source: 'node1-3-5', target: 'node1-3-5-2', },
        { source: 'node1-3-5', target: 'node1-3-5-3', },
        { source: 'node1-3-5', target: 'node1-3-5-4', },
        { source: 'node1-3-5', target: 'node1-3-5-5', },
        { source: 'node1-3-5', target: 'node1-3-5-6', },
        { source: 'node1-3-5', target: 'node1-3-5-7', },
        { source: 'node1-3-5', target: 'node1-3-5-8', },
        { source: 'node1-3-5', target: 'node1-3-5-9', },
        { source: 'node1-4', target: 'node1-4-1', },
        { source: 'node1-4', target: 'node1-4-2', },
        { source: 'node1-4', target: 'node1-4-3', },
        { source: 'node1-4', target: 'node1-4-4', },
        { source: 'node1-5', target: 'node1-5-1', },
        { source: 'node1-5', target: 'node1-5-2', },
        { source: 'node1-6', target: 'node1-6-1', },
        { source: 'node1-6', target: 'node1-6-2', },
        { source: 'node1-6', target: 'node1-6-3', },
        { source: 'node1-6', target: 'node1-6-4', },
        { source: 'node1-6', target: 'node1-6-5', },
        { source: 'node1-6', target: 'node1-6-6', },
        { source: 'node1-6', target: 'node1-6-7', },
        { source: 'node1-6', target: 'node1-6-8', },
        { source: 'node1-6', target: 'node1-6-9', },
        { source: 'node1-6', target: 'node1-6-10', },
        { source: 'node1-6', target: 'node1-6-11', },
        { source: 'node1-7', target: 'node1-7-1', },
        { source: 'node1-7', target: 'node1-7-2', },
        { source: 'node1-7', target: 'node1-7-3', },
        { source: 'node1-7', target: 'node1-7-4', },
        { source: 'node1-8', target: 'node1-8-1', },
        { source: 'node1-8', target: 'node1-8-2', },
        { source: 'node1-8', target: 'node1-8-3', },
        { source: 'node1-8', target: 'node1-8-4', },
        { source: 'node1-8', target: 'node1-8-5', },
        { source: 'node1-9', target: 'node1-9-1', },
        { source: 'node1-9', target: 'node1-9-2', },
        { source: 'node1-10', target: 'node1-10-1', },
        { source: 'node1-10', target: 'node1-10-2', },
        { source: 'node1-10', target: 'node1-10-3', },
        { source: 'node1-10', target: 'node1-10-4', },
        { source: 'node1-10', target: 'node1-10-5', },
        { source: 'node1-10', target: 'node1-10-6', },
        { source: 'node1-10', target: 'node1-10-7', },
        { source: 'node1-10', target: 'node1-10-8', },
        { source: 'node1-11', target: 'node1-11-1', },
        { source: 'node1-11', target: 'node1-11-2', },
        { source: 'node1-11', target: 'node1-11-3', },
        { source: 'node1-11', target: 'node1-11-4', },
        { source: 'node1-11', target: 'node1-11-5', },
        { source: 'node1-11', target: 'node1-11-6', },
        { source: 'node1-11', target: 'node1-11-7', },
        { source: 'node1-11', target: 'node1-11-8', },
        { source: 'node1-12', target: 'node1-12-1', },
    ],
};

// 创建 G6 图实例
const graph = new G6.Graph({
    container: 'mountNode', // 指定图画布的容器 id
    // 画布宽高
    width: 1000,
    height: 1500,
    fitView: true,
    fitViewPadding: [20, 40, 50, 20],
});
console.log(document.body.clientWidth);
console.log(document.body.clientHeight);
// 读取数据
graph.data(data);
// 渲染图
graph.render();
