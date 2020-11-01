## 学习笔记 ##

### CSS语法的研究 ###
* @charset
* @import
* rules
   * @media
   * @page
   * rule

### CSS@规则的研究 ###
* @couter-style
* @keyframes
* @fontface
* @supports
* @namespace

### CSS规则 ###
* Selector
* Declaration
    * Key
    * Value

### 收集标准 ###

### CSS总结 ###
* CSS语法
* at-rule
* selector
* variable
* value
* 实验

### 选择器语法 ### 
* 简单选择器 (*,属性，标签名，类，id，伪元素，伪类)
* 复合选择器 (简单选择器的组合)
* 复杂选择器 (负责选择器的组合)

### 选择器的优先级 ###
* 简单选择器计数
[0,0,0,0] => [内连，id，class，其他]

### 伪类 ###
* 链接/行为
    * :any-link
    * :link:visited
    * :hover
    * :active
    * :focus
    * :target
* 树结构
    * empty
    * :nth-child()
    * :nth-last-child()
    * :first-child :last-child :only-child
* 逻辑型
    * :not伪类
    * :where:has

### 伪元素 ###
* ::before
* ::after
* ::first-line
* ::first-letter

思考题:为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
答:我觉得可能是因为影响布局？