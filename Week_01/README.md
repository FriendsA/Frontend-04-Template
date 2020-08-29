
### 书大纲

* DOM
* BOM
* CSS { 元素，伪元素，伪标签，选择器 }
* HTML { 标签 { 行内标签，块状标签，meta，title，style，script }，盒模型，布局{flex,grid,obsolute,relactive,fixed}}
* JS { 基本数据类型，function，object{普通对象，特殊对象{class,包装器对象，正则对象，math}}，语法{if,for,while,三目，closure,异步方法}}

### 学习笔记 ###

* show方法不需要传参数
* 重复点击没有判断
* 改成一维数组时 循环大部分也可以改成单层循环
* 先走一定会赢
* 可以改成show时只改变落子的点

***
1. 每次都重新画为什么不只更改画上的呢？
2. Object.create() 什么条件可以用这个来创造对象？什么情况不行？对于一维数组来说，用map(),filter(),concat()等方法有什么弊端吗？
3. return & return null ???
4. ai 不会阻止马上要赢的局面？？
5. 不是数组用textContent并且穷举判断成功方法还能做AI吗？
***

* addEventListener的第三个参数
> options 可选 Object {capture?,once,passive?}  
>
> 一个指定有关 listener 属性的可选参数对象。可用的选项如下：
> capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
> once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
> passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制
>
> useCapture 可选 Boolean
>
>   Boolean，在DOM树中，注册了listener的元素， 是否要先于它下面的EventTarget，调用该listener。 当useCapture(设为true) 时，沿着DOM树向上冒泡的事件，不会触发listener。当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。进一步的解释可以查看 事件流 及 JavaScript Event order 文档。 如果没有指定， useCapture 默认为 false 。