## 学习笔记 ##
## Q:  
 -Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x) )
 
这里这个Math.round(x / 500)是不是多余呢？有什么用呢？

### 组件的基本概念和基本组成部分 ###

* 对象和组件
```
对象 
    Properties
    Method
    Inherit
组件
    Properties
    Method
    Inherit
    Attribute
    Config & State
    Event
    Lifecycle
    Children
```

| fMarkup set | JS set | JS Change | User Input Change |           |
|-------------|--------|-----------|-------------------|-----------|
| x           | √      | √         | ?                 | property  |
| √           | √      | √         | ?                 | attribute |
| x           | x      | x         | √                 | state     |
| x           | √      | x         | x                 | config    |

### Carousel组件 ###
```
1.如果你电脑全局没有装 webpack-dev-server
你直接使用 webpack-dev-server 命令会报错 command not found: webpack-dev-server
需要使用 node_modules/.bin/webpack-dev-server 启动
或者
配置在package.json 例如:
"scripts": {
"start": "webpack-dev-server"
}
使用 npm start 或 yarn start 启动

2.webpack-cli是4.* 版本 会和 webpack-dev-server 3.* 版本 不兼容
启动 webpack-dev-server 会报错：Cannot find module 'webpack-cli/bin/config-yargs'
可以换成启动 webpack serve 命令
```