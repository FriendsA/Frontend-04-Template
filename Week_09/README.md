## 学习笔记 ##

## Q:为什么first-line 不能设置 text-orientation 呢？

### 思考题:为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？###
答:我觉得可能是因为first-letter行为上就相当于行内元素的一行,屏幕大小，字体间距字体大小都会影响该属性的展示，如果设置了float则字体和屏幕大小相关的影响都不会再生效，就矛盾。

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

The ::first-line pseudo-element’s generated box behaves similar to that of an inline-level element, but with certain restrictions. The following CSS properties apply to a ::first-line pseudo-element:

1. all font properties (see [CSS-FONTS-3])
2. the color and opacity properties (see [CSS-COLOR-3])
3. all background properties (see [CSS-BACKGROUNDS-3])
4. any typesetting properties that apply to inline elements (see [CSS-TEXT-3])
5. all text decoration properties (see [CSS-TEXT-DECOR-3])
6. the ruby-position property (see [CSS-RUBY-1])
7. any inline layout properties that apply to inline elements (see [CSS-INLINE-3])
8. any other properties defined to apply to ::first-line by their respective specifications

User agents may apply other properties as well except for the following excluded properties:

1. writing-mode
2. direction
3. text-orientation
