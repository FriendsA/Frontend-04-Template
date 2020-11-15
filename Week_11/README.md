## 学习笔记 ##
***
## Q: ##
1.word-break:normal MDN上的说明是使用默认的断行规则，那么什么是默认的断行规则？
2.white-space的属性值 pre-wrap 和 break-spaces 有什么区别？
3.overflow-wrap的属性值anywhere的定义是什么? overflow-wrap的属性值 break-word和anywhere有什么区别？

### HTML的定义:XML与SGML ###
字符引用
* &nbsp --> white-space
* &quot == <<>>
* &amp == &
* &lt == <
* &gt == >
namespace: HTML SVG MathML

### HTML标签语义 ###
```
<aside></aside>
<em></em>
<strong></strong>
<figure></figure>
<samp></samp>
<pre></pre>
<dfn></dfn>
<code></code>
```

### HTML语法 ###
```
1. Element:<tagname>...</tagname>
2. Text:text
3. Comment:<!-- Comment -->
4. DocumentType:<!Document html>
5. ProcessingInstruction:<?a 1?> 预处理节点
6. CDATA:<![CDATA[]]> 特殊的语法产生文本节点无需转义
```

### 事件API ###
* 冒泡与捕获（默认冒泡）

### DOM API ###
* 节点类API
* 事件API
* RangeAPI

#### 节点
```
node--- Element: 元素型节点，跟标签相对应 --- HTMLElement --- HTMLAnchorElement、HTMLBodyElement...
     |                                 |- SVGElement --- SVGAElement、SVGAltGlyphElement...
     |- Document: 文档根节点
     |- CharacterData: 字符数据 --- Text: 文本节点 --- CDATASection: CDATA节点
     |                          |- Comment: 注释
     |                          |- ProcessingInstruction: 处理信息
     |- DocumentFragment: 文档片段
     |- DocumentFragment: 文档类型 
```
#### 操作
* 导航类操作 节点类(会查到文本节点)，元素类

| Node            | Element                |
|:----------------|:-----------------------|
| parentNode      | parentElement          |
| childNodes      | children               |
| firstChild      | firstElementChild      |
| lastChild       | lastElementChild       |
| nextSibling     | nextElementSibling     |
| previousSibling | previousElementSibling |

* 修改操作
    - appendChild
    - insertBefore
    - removeChild
    - replaceChild

* 高级操作
    - compareDocumentPosition 是一个比较两个节点关系的函数
    - contains 检查一个节点是否包含另一个节点的函数
    - isEqualNode 检查两个节点是否完全相同
    - isSameNode 检查两个节点是否是同一个节点，在javascript 中可以使用'==='
    - cloneNode 复制一个节点，如果传入参数true，则会连同子元素做深拷贝

### Range API ###

> 把一个元素的所有子元素逆序

* let range = new Range()
* range.setStart(element,9);
* range.setEnd(element,4);
* let range = document.getSelection().getRangeAt(0);

* range.setStartBefore
* range.setEndBefore
* range.setStartAfter
* range.setEndAfter
* range.selectNode
* range.selectNodeContents

* range.extractContents() --> fragment对象  取出
* range.insertNode(document.createTextNode("aaaa")) 插入

* fragment

### CSSOM ###
* document.styleSheets
* data uri

* document.styleSheets[0].cssRules (insertRule,removeRule)
* document.styleSheets[0].insertRule("p {color:pink;}",0)
* document.styleSheets[0].removeRule(0);

#### Rules ####
* CSSStyleRule
    * selectorText String
    * style K-V结构

#### getComputedStyle
* window.getComputedStyle(elt,pseudoElt)
    * elt 想要获取的元素
    * pseudoElt 可选 伪元素

### CSSOM View ###
* window
    * window.innerHeight,window.innerWidth
    * window.outerHeighy,windwo.outerWidth
    * window.devicePixelRadio (DPR 屏幕上的物理像素和代码里的逻辑像素的比值)
    * window.screen
        * window.screen.width
        * window.screen.height       
        * window.screen.availWidth        
        * window.screen.availHeight

* window API
    * window.open("about:blank","blank","width=100,height=100,left=100;right=100")
    * moveTo(x,y)
    * moveBy(x,y)
    * resizeTo(x,y)
    * resizeBy(x,y)

* scroll(overflow:scroll 元素)
    * scrollTop
    * scrollLeft
    * scrollWidh
    * scrollHeight
    * scroll(x,y)
    * scrollBy(x,y)
    * scrollInfoView() 滚到可见区域
* window(窗口)
    * scrollX
    * scrollY
    * scroll(x,y)
    * scrollBy(x,y)

* layout
    * getClientRects()
    * getBoundingClientRects() 

* 其他API
> 标准化组织

     khronos
         WebGL
     ECMA
         ECMAScript
     WHATWG
         HTMl
     W3C
         webaudio
         CG/WG

[API分类](https://spec.whatwg.org/)