#! /usr/bin/env node
// Import the 'inquirer' library to create CLI prompts
import inquirer from "inquirer";
// Array to store the to-do list
let todos = [];
// Flag to control the loop
let condition = true;
// Loop to repeatedly ask for tasks until the user decides to stop
while (condition) {
    // Prompt the user for a task and whether they want to add more tasks
    const { todo, addmore } = await inquirer.prompt([
        // Prompt message for the task
        {
            name: "todo",
            type: "input",
            message: "What task do you want to add?",
        },
        // Prompt message for adding more tasks
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: false, // Default value for the confirmation prompt
        },
    ]);
    // Add the task entered by the user to the 'todos' array
    todos.push(todo);
    // Update the condition based on the user's response to add more tasks
    condition = addmore;
    // Log the task that was added (for debugging purposes)
    console.log(todos);
}
// Display the to-do list after all tasks are added
console.log("Your to-do list:");
todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
