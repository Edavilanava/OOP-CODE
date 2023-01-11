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