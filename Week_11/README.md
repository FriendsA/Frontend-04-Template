## 学习笔记 ##

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
