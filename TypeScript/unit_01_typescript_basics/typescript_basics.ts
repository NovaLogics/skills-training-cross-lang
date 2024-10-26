// This is a simple TypeScript tutorial script with basic concepts explained.

// TypeScript Basics

// 1. Declaring Variables
// In TypeScript, we can specify types for variables. Here are a few examples:

let myName: string = "Nova"; // This is a string type variable
let age: number = 25;           // This is a number type variable
let isStudent: boolean = true;   // This is a boolean type variable

// TypeScript can also infer types automatically:
let inferredString = "Hello, TypeScript!"; // TypeScript infers this as a string
let inferredNumber = 100;                   // TypeScript infers this as a number

//---------------------------------------------------------------------------------
// 2. Arrays
// Arrays in TypeScript can also have type annotations:

let numberArray: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let stringArray: string[] = ["apple", "banana", "cherry"]; // Array of strings

//---------------------------------------------------------------------------------
// 3. Functions
// Functions in TypeScript can have type annotations for parameters and return values.

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log("Sum of 3 and 5:", addNumbers(3, 5));

//---------------------------------------------------------------------------------
// 4. Objects
// You can create objects with specific types for each property.

let person: { name: string; age: number; isStudent: boolean } = {
    name: "Rajitha",
    age: 25,
    isStudent: true,
};

// Accessing object properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is a student:", person.isStudent);

//---------------------------------------------------------------------------------
// 5. Enums
// Enums allow you to define a set of named constants. They are useful when you have a fixed set of options.

enum Direction {
    North,
    South,
    East,
    West,
}

let myDirection: Direction = Direction.North;
console.log("Direction:", myDirection); // Output will be 0 (index of North)

//---------------------------------------------------------------------------------
// 6. Type Aliases
// Type aliases allow you to create custom types and reuse them.

type Point = {
    x: number;
    y: number;
};

let point1: Point = { x: 10, y: 20 };
console.log("Point coordinates:", point1);

//---------------------------------------------------------------------------------
// 7. Interfaces
// Interfaces can be used to define the shape of an object, similar to type aliases.

interface Animal {
    name: string;
    age: number;
    sound(): void;
}

let dog: Animal = {
    name: "Buddy",
    age: 4,
    sound: () => console.log("Woof! Woof!"),
};

dog.sound(); // Call the sound function

//---------------------------------------------------------------------------------
// 8. Classes
// TypeScript classes allow us to create objects with properties and methods.

class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving!`);
    }
}

let myCar = new Car("Toyota", "Camry", 2020);
myCar.drive();

//---------------------------------------------------------------------------------
// 9. Generics
// Generics allow us to create reusable components that work with multiple types.

function identity<T>(value: T): T {
    return value;
}

console.log("String identity:", identity("Hello!")); // Output: Hello!
console.log("Number identity:", identity(123));      // Output: 123

//---------------------------------------------------------------------------------
// 10. Union Types
// Union types allow variables to hold more than one type of value.

let mixedType: number | string;
mixedType = 10;      // OK
mixedType = "Hello"; // OK

//---------------------------------------------------------------------------------
// 11. Optional Properties
// Properties can be marked as optional with a question mark.

interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

let user1: User = { id: 1, name: "Alice" };
let user2: User = { id: 2, name: "Bob", email: "bob@example.com" };

console.log("User1:", user1);
console.log("User2:", user2);

//---------------------------------------------------------------------------------
// 12. Type Assertion
// Type assertion is a way to tell TypeScript the specific type of a variable.

let someValue: unknown = "Hello, TypeScript!";
let stringLength: number = (someValue as string).length;
console.log("Length of string:", stringLength);

// These are the fundamentals to help you get started with TypeScript basics.
