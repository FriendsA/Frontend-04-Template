## 学习笔记 ##

### 1.JS表达式 ### 

Member
* a.b
* a[b]
* foo`string`
* super.b
* super[b]
* new.target
* new Foo()
New 
* new Foo
#### Reference ####
Call
* foo()
* super()
* foo()['b']
* foo().b
* foo()`abc`
#### 唯一右结合的运算符 ** ####

### 2.类型转换 ### 
Unboxing
* ToPremitive
* toString vs valueOf
* Symbol.toPrimitive

Boxing

| 类型   | 对象   |  值  |
|--------|--------|---------|
| Number | new Number(1) | 1 |
| String | new String("a") | "a" |
| Boolean | new Boolean(true) | true |
| Symbol | new Object(Symbol("a")) | Symbol("a") |

### 3.运行时 ### 
* Completion Record
* Lexical Environment
### 4.简单语句和控制语句 ###
#### 简单语句 ####
* ExpressionStatement
* EmptyStatement
* DebuggerStatement
* ThrowStatement
* ContinueStatement
* BreakStatement
* ReturnStatement
#### 复合语句 ####
* BlockStatement
* ifStatement
* SwitchStatement
* IterationStatement
* WithStatement
* LabelledStatement
* TryStatement

`return 打断不了try语句`

### 5.声明 ###
* FunctionDeclaration
* GeneratorDeclaration
* AsyncFunctionDeclaration
* AsyncGeneratorDeclaration
* VariableDeclaration
* ClassDeclaration
* LexicalDeclaration

#### 预处理 ####
`所有的变量声明都有预处理机制`
#### 作用域 ####

### 宏任务和微任务 ###
* 宏任务
* 微任务
* 函数调用

* code evaluation state
* Function
* Script or Module
* Generator
* Realm
* LexicalEnvironment
* VariableEnvironment
