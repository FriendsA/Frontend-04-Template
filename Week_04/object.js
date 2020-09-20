
class Dog{
    constructor(name) {
        this.name = name;
        this.teeth = 20;
    }
    bite = () => {
        return this.teeth;
    }
}
class Human {
    constructor(name) {
        this.name = name;
        this.body = 100;
    }
    hurt = (damage) => {
        this.body = this.body - damage;
        console.log(this.body);
    }
}

let human = new Human("人");
let dog = new Dog("狗");

human.hurt(dog.bite());
