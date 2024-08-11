// ts_quiz.ts
import { Question } from './types.js';

export const tsQuestions: Question[] = [
    {
        question: "Which of the following is a valid way to declare a variable in TypeScript?",
        options: ["var name: string;", "variable name: string;", "let name: string;"],
        correctAnswer: "let name: string;"
    },
    {
        question: "What is the use of the 'readonly' modifier in TypeScript?",
        options: ["To create a constant variable.", "To prevent modification of object properties.", "To allow properties to be overwritten."],
        correctAnswer: "To prevent modification of object properties."
    },
    {
        question: "Which keyword is used to define an enum in TypeScript?",
        options: ["enum", "enumeration", "enums"],
        correctAnswer: "enum"
    },
    {
        question: "What is the output of 'typeof undefined' in TypeScript?",
        options: ["'undefined'", "'object'", "'null'"],
        correctAnswer: "'undefined'"
    },
    {
        question: "How do you declare an array of numbers in TypeScript?",
        options: ["let arr: number[];", "let arr: numbers[];", "let arr: numArray[];"],
        correctAnswer: "let arr: number[];"
    },
    {
        question: "Which of the following is a correct way to define a function in TypeScript?",
        options: [
            "function add(a: number, b: number): number { return a + b; }",
            "func add(a: number, b: number): number => a + b;",
            "let add = (a: number, b: number): number => return a + b;"
        ],
        correctAnswer: "function add(a: number, b: number): number { return a + b; }"
    },
    {
        question: "What is the difference between 'unknown' and 'any' in TypeScript?",
        options: [
            "'unknown' is safer than 'any'.",
            "'any' is a subtype of 'unknown'.",
            "'unknown' is used for dynamic values, 'any' for unknown types."
        ],
        correctAnswer: "'unknown' is safer than 'any'."
    },
    {
        question: "How can you handle a promise in TypeScript?",
        options: ["Using .then() and .catch()", "Using await", "Both"],
        correctAnswer: "Both"
    },
    {
        question: "Which TypeScript type is used when no value is returned from a function?",
        options: ["void", "null", "undefined"],
        correctAnswer: "void"
    },
    {
        question: "What is type assertion in TypeScript?",
        options: [
            "Converting one type to another.",
            "Telling the compiler to treat a variable as a specific type.",
            "Ensuring a variable is defined."
        ],
        correctAnswer: "Telling the compiler to treat a variable as a specific type."
    },
    {
        question: "How can you create an interface in TypeScript?",
        options: [
            "interface MyInterface { }",
            "type MyInterface = interface { }",
            "struct MyInterface { }"
        ],
        correctAnswer: "interface MyInterface { }"
    },
    {
        question: "Which of the following is a tuple in TypeScript?",
        options: ["let tuple: [string, number];", "let tuple: (string, number);", "let tuple: {string, number};"],
        correctAnswer: "let tuple: [string, number];"
    },
    {
        question: "What is 'never' type in TypeScript used for?",
        options: ["To denote a value that never occurs.", "For nullable types.", "For variables that hold no value."],
        correctAnswer: "To denote a value that never occurs."
    },
    {
        question: "Which of the following types cannot be null in TypeScript?",
        options: ["number", "undefined", "void"],
        correctAnswer: "number"
    },
    {
        question: "What is the purpose of 'strictNullChecks' in TypeScript?",
        options: ["To prevent assignment of null or undefined.", "To allow null values in variables.", "To disable type checking."],
        correctAnswer: "To prevent assignment of null or undefined."
    },
    {
        question: "How do you mark an optional property in an interface?",
        options: ["property?: type", "property!: type", "property?: any"],
        correctAnswer: "property?: type"
    },
    {
        question: "Which of the following is the correct way to use a class in TypeScript?",
        options: ["class MyClass {}", "MyClass class {}", "class { MyClass }"],
        correctAnswer: "class MyClass {}"
    },
    {
        question: "What does the 'export' keyword do in TypeScript?",
        options: ["Makes a module public.", "Allows a module to be used in other files.", "Exports a variable as a string."],
        correctAnswer: "Allows a module to be used in other files."
    },
    {
        question: "How do you import a module in TypeScript?",
        options: [
            "import { MyModule } from './myModule';",
            "import './myModule';",
            "require('./myModule');"
        ],
        correctAnswer: "import { MyModule } from './myModule';"
    },
    {
        question: "Which of the following is a valid tuple in TypeScript?",
        options: ["let tuple: [string, number];", "let tuple: [string, string];", "let tuple: (string, number);"],
        correctAnswer: "let tuple: [string, number];"
    },
    {
        question: "What is the purpose of 'interface' in TypeScript?",
        options: [
            "To define the shape of an object.",
            "To declare an abstract class.",
            "To define a constant."
        ],
        correctAnswer: "To define the shape of an object."
    },
    {
        question: "Which TypeScript type is used for dynamic values?",
        options: ["any", "unknown", "undefined"],
        correctAnswer: "any"
    },
    {
        question: "How do you specify a function parameter as optional?",
        options: ["param?: type", "param: type | null", "param!: type"],
        correctAnswer: "param?: type"
    },
    {
        question: "What is the output type of a function that never returns?",
        options: ["never", "void", "null"],
        correctAnswer: "never"
    },
    {
        question: "How can you extend an interface in TypeScript?",
        options: [
            "interface MyInterface extends BaseInterface { }",
            "type MyInterface implements BaseInterface { }",
            "interface MyInterface implements BaseInterface { }"
        ],
        correctAnswer: "interface MyInterface extends BaseInterface { }"
    }
];
