## 学习笔记 ##

### 重学Javascript ###

#### 乔姆斯基谱系 ####

* 0型 无限制文法
* 1型 上下文相关文法
* 2型 上下文无关文法
* 3型 正则文法

#### 产生式(BNF) #### 


### Number ###

```
符号位（1） 指数位（11） 精度位（52） 
Number = 精度位 * 2 ^ 指数位
指数位有基准值 1 0000000000（10位）表示 2**1
精度位有隐藏位 1 
```

### String ###

```
Character
Code point
Encoding 

ASCII
Unicode
UCS
GB  GB2313
    GBK(GB13000)
    GB18030
ISO-8859
BIG5
```

* 8个bit 一个字节
* 十进制转n进制 num.toString(n)
* n进制转十进制 parseInt(num,n)

### Object ### 

* 数据属性  [[value]]  writable enumerable configurable
* 访问器属性 get set enumerable configurable

1. {}/./[]/Object.defineProperty()
2. Object.create()/Object.setPropertypeOf()/Object.getPropertypeOf()
3. new/class/extends
4. ~~new/function/prototype~~
