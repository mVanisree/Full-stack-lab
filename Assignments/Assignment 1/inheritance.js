// SINGLE INHERITANCE

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

let dog = new Dog();

console.log("Single Inheritance:");
dog.eat();
dog.bark();


// MULTILEVEL INHERITANCE

class Puppy extends Dog {
    play() {
        console.log("Puppy is playing");
    }
}

let puppy = new Puppy();

console.log("\nMultilevel Inheritance:");
puppy.eat();
puppy.bark();
puppy.play();


// HIERARCHICAL INHERITANCE

class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}

let cat = new Cat();

console.log("\nHierarchical Inheritance:");
cat.eat();
cat.meow();


// MULTIPLE INHERITANCE USING MIXIN

class Father {
    programming() {
        console.log("Programming skill");
    }
}

const MotherSkills = {
    dancing() {
        console.log("Dancing skill");
    }
};

class Child extends Father {}

Object.assign(Child.prototype, MotherSkills);

let child = new Child();

console.log("\nMultiple Inheritance:");
child.programming();
child.dancing();