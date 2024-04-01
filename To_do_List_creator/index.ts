#! /usr/bin/env node

// Import the 'inquirer' library to create CLI prompts
import inquirer from "inquirer";

// Array to store the to-do list
let todos: string[] = [];

// Flag to control the loop
let condition = true;

// Loop to repeatedly ask for tasks until the user decides to stop
while (condition) {
  // Prompt the user for a task and whether they want to add more tasks
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What task do you want to add?", // Prompt message for the task
    },
    {
      name: "addmore",
      type: "confirm",
      message: "Do you want to add more tasks?", // Prompt message for adding more tasks
      default: false, // Default value for the confirmation prompt
    },
  ]);

  // Add the task entered by the user to the 'todos' array
  todos.push(addTask.todo);

  // Update the condition based on the user's response to add more tasks
  condition = addTask.addmore;

  // Log the task that was added (for debugging purposes)
  console.log(addTask.todo);
}

// Display the to-do list after all tasks are added
console.log("Your to-do list:");
todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
