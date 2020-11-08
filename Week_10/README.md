## 学习笔记 ## 

## Q:在 -c-s-s 脑图上对 -c-s-s 的属性进行分类 ##
详见 CSSProperties.js

### 盒 ###
* Tag(标签)  源代码
* Elemment(元素) 语义
* Box(盒) 表现

| Tag    | Element | Box  |
|--------|---------|------|
| 标签   | 元素    | 盒   |
| 源代码 | 语义    | 表现 |

### 正式流 ###
* 正常流
* flex
* grid
* CSS Houdini
* IFC 行内格式化上下文
* BFC 块级格式化上下文

### 正常流的行级排布 ###
* 行模型 vertical-align
    * line-top
    * text-top
    * base-line
    * text-bottom
    * line-bottom

### 正常流的块级排布 ###
* float clear
* Margin Collapse (only BFC)

### BFC合并 ###
* Block 
    * Block Container
    * Block-level Box
    * Block Box = Block Container + Block-level Box

* Block Container
    * block
    * inline-block
    * table-cell
    * flex-item
    * grid-cell
    * table-caption

* Block-level Box
    * Block-level
        * display:block
        * display:flex
        * display:grid
        * display:table
    * inline-level
        * display:inline-block
        * display:inline-flex
        * display:inline-grid
        * display:inline-table
    * display: run-in
* 设立BFC
    * floats
    * absolutely positioned elements
    * block containers(such as inline-blocks,table-cells,and table-captions)
      that are not block boxes,
        * flex-items
        * grid-items
        * table-cells
        * table-captions
    * and block boxes with 'overflow' other than 'visible'
    
    * block box && overflow:visible
        * BFC合并与float
        * BFC合并与边距折叠

### flex排版 ###
* 收集盒进行
* 计算盒在主轴方向的排布
* 计算盒在交叉轴方向的排布

* 分行
    * 根据主轴尺寸，把元素分进行
    * 若设置了no-wrap 则强行分配进第一行
    * 若剩余空间为负数，所有flex元素为0，等比压缩剩余空间
* 计算交叉轴方向
    * 根据每一行中最大元素计算行高
    * 根据行高flex-align和item-align，确定元素具体位置

### 动画 ### 
* Animation
    * @keyframes定义
    * animation使用

    * animation-name 时间名称
    * animation-duration 动画的时长
    * animation-timing-function 动画的时间曲线
    * animation-delay 动画开始前的延迟
    * animation-iteration-count 动画的播放次数
    * animation-direction 动画的方向

* Trasition
    * trasition-propety 要变换的属性
    * trasition-duration 变换的时长
    * trasition-timing-function 时间曲线
    * trasiton-delay 延迟

* 三次贝塞尔曲线拟合

### 颜色 ###
* CMKYK和RGB
    * CMYK 品红 黄 青 黑
    * RGB 红 绿 蓝
* HSL与HSV
    * HSL Hue(色相) Saturation(饱和度) Lightness
    * HSV Hue Saturation Value(Brightness 明度)

### 绘制 ###
* 几何图形
    * border
    * box-shadow
    * border-radius
* 文字
    * font
    * text-decoration
* 位图
    * background-image

* 应用技巧
    * data uri + svg 绘制图形