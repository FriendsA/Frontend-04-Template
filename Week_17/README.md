## 学习笔记
## Q:
1. 什么是断言？
2. ./node_modules/.bin/mocha --required @babel/register 执行报错
import { add } from '../add'
^^^^^^
SyntaxError: Cannot use import statement outside a module
写在scripts里确可以是为什么？
3. .lock 文件干什么的？记录具体版本
4. webpack loader use 执行顺序？栈式执行
### 单元测试工具 | mocha
> ./node_modules/.bin/mocha --required @babel/register


### 测试覆盖比例工具 | nyc 
> ./node_modules/.bin/nyc ./node_modules/.bin/nyc --required @babel/register