## 学习笔记 ##

## Q：
TimeLine 里的 reset()方法 可以用在什么地方呢。Animation动画还停在一半也没重制回去啊？
### 初步建立动画和时间线 ### 

```
1. setInterval(() => { }, 16);

2. let tick = () => {

    setTimeout(tick, 16);
}

3. let tick = () => {
    
    let handler = requestAnimationFrame(tick);
    cancelAnimationFrame(handler);
}

```

* 属性动画
* 帧动画
