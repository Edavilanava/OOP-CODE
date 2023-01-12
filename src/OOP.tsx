export {}
class Shape {
    // Encapsulation: the variables below are protected and can only be accessed within this class
    protected x: number;
    protected y: number;

    // Abstraction: the constructor sets the initial values for the protected variables
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Polymorphism: this method can be overridden in child classes
    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    // Polymorphism: this method can be overridden in child classes
    draw(): void {
        console.log(`Drawing shape at coordinates: (${this.x}, ${this.y})`);
    }
}

class Circle extends Shape {
    // Inheritance: Circle inherits the protected variables and methods from Shape
    // Polymorphism: this method overrides the move method in the parent class
    move(x: number, y: number): void {
        super.move(x, y);
        console.log(`Circle moved by ${x} in the x-axis and ${y} in the y-axis`);
    }

    // Polymorphism: this method overrides the draw method in the parent class
    draw(): void {
        console.log(`Drawing circle at coordinates: (${this.x}, ${this.y})`);
    }
}

class Square extends Shape {
    // Inheritance: Square inherits the protected variables and methods from Shape
    // Polymorphism: this method overrides the move method in the parent class
    move(x: number, y: number): void {
        super.move(x, y);
        console.log(`Square moved by ${x} in the x-axis and ${y} in the y-axis`);
    }

    // Polymorphism: this method overrides the draw method in the parent class
    draw(): void {
        console.log(`Drawing square at coordinates: (${this.x}, ${this.y})`);
    }
}

const circle = new Circle(5, 5);
circle.move(2, 3); 
circle.draw();
// Output: Circle moved by 2 in the x-axis and 3 in the y-axis
//         Drawing circle at coordinates: (7, 8)

const square = new Square(10, 10);
square.move(4, 2); 
square.draw();
// Output: Square moved by 4 in the x-axis and 2 in the y-axis
//         Drawing square at coordinates: (14, 12)

//In this example, the Shape class demonstrates encapsulation by using the protected access modifier on the x and y variables, 
//which means that they can only be accessed within the Shape class or in any class that inherits from Shape. 
//The Shape class also demonstrates abstraction through its constructor, which sets the initial values for the x and y variables.

//The Circle and Square classes demonstrate inheritance by extending the Shape class. 
//They also demonstrate polymorphism by overriding the move and draw methods inherited



//In TypeScript, a static member is defined by using the "static" keyword before the property or method, like this:
class MyClass {
    static myStaticProperty = "some value";
    static myStaticMethod() {
        console.log("This is a static method");
    }
}



//In the example above, The properties and methods with the protected access modifier can only be accessed from the Shape class and any class that extends it, in this case the Circle class, which can access name and getName() by using the this keyword.
// class Form {
//     protected name: string;

//     protected constructor(name: string) {
//         this.name = name;
//     }

//     protected getName(): string {
//         return this.name;
//     }
// }

// class Round extends Shape {
//     constructor(name: string) {
//         super(name);
//     }

//     describe(): void {
//         console.log(`I am a ${this.getName()}.`);
//     }
// }



//In the example above, the count variable and the increment function are both defined with private access modifier, which means that it can only be accessed within the Counter class, not outside it.

//This approach allows you to create a clear and well-defined interface for interacting with the object, without revealing its internal implementation details, making it more robust and maintainable.
// class Counter {
//     private count = 0;

//     increment(): void {
//         this.count++;
//     }

//     getCount(): number {
//         return this.count;
//     }
// }

// const myCounter = new Counter();
// console.log(myCounter.count); //Error: Property 'count' is private and only accessible within class 'Counter'.
// console.log(myCounter.getCount()); // 0
// myCounter.increment();
// console.log(myCounter.getCount()); // 1
