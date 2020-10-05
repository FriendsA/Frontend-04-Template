## 学习笔记 ## 

#### Q： ####
```
["X-Foo2"]: "customed",这个属性为什么要加个中括号？为什么不直接使用 "X-Foo2": "customed" ？
```

### 1.浏览器工作原理总汇 ### 
url-> Bigmap

### 2.有限状态机 ### 
Moore 每个机器都有确定的下一个状态
Mealy 每个机器根据输入决定下一个状态

### 3.不使用状态机处理字符串 ###

### 4.使用状态机处理字符串 ###

### 5.http协议的解析 ###
ISO-OSI七层网络模型

### 6.实现http请求 ###
1. HTTP请求
* 设计一个HTTP请求的类
* Content-Type是一个必要的字段，要有默认值
* body是KV格式
* 不同的content-type影响body的格式
2. send函数
* 在Request构造器中收集必要的信息
* 设计一个send函数，把请求真实发送到服务器
* send函数应该是一步的，所以返回Promise
3. 发送请求
* 设计支持已有的connection或者自己新建connection
* 收到数据传给parser
* 根据parser的状态 resovle Promise
4. ResponseParser
* Response 必须分段构造，所以我们要用一个ResponseParser来“装配”
* ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构
5. BodyParser
* RsponseParser 可能根据Content-Type 有不同的结构，因此我们会采用子parser的结构来解决问题
* 以TrunkBodyParser为例，我们同样用状态机来处理body的格式