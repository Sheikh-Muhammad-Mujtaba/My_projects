import inquirer from "inquirer";
import chalk from "chalk";

// ASCII art for banner
const banner = chalk.bold.yellow(` 
### ### #######                ######                 #                      ### ### 
### ###    #     ####          #     #  ####          #       #  ####  ##### ### ### 
 #   #     #    #    #         #     # #    #         #       # #        #    #   #  
           #    #    #         #     # #    #         #       #  ####    #           
           #    #    #         #     # #    #         #       #      #   #           
           #    #    #         #     # #    #         #       # #    #   #           
           #     ####  ####### ######   ####  ####### ####### #  ####    #                     
                                                           `);


// Array to store the to-do list
let todos: { task: string; completed: boolean }[] = [];

// Function to display the to-do list
const displayTodos = () => {
  console.log(chalk.bold.blue("\nYour to-do list:"));
  todos.forEach((task, index) => {
    const status = task.completed ? chalk.green(" (completed)") : "";
    console.log(chalk.yellow(`${index + 1}. ${task.task}${status}`));
  });
};


// Function to add a new task
// Function to add a new task
const addTask = async () => {
  let addingMore = true;
  while (addingMore) {
    const { todo } = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: "What task do you want to add? (Enter 'done' to finish)",
      },
    ]);
    if (todo.toLowerCase() === "done") {
      addingMore = false;
    } else {
      todos.push({ task: todo, completed: false });
      console.log(chalk.green("Task added successfully!"));
    }
  }
};

// Function to delete a task
const deleteTask = async () => {
  displayTodos();
  const { index } = await inquirer.prompt([
    {
      name: "index",
      type: "input",
      message: "Enter the index of the task you want to delete:",
    },
  ]);
  const idx = parseInt(index) - 1;
  if (!isNaN(idx) && idx >= 0 && idx < todos.length) {
    todos.splice(idx, 1);
    console.log(chalk.green("Task deleted successfully!"));
  } else {
    console.log(chalk.red("Invalid index. Task not deleted."));
  }
};

// Function to update a task
const updateTask = async () => {
  displayTodos();
  const { index, task } = await inquirer.prompt([
    {
      name: "index",
      type: "input",
      message: "Enter the index of the task you want to update:",
    },
    {
      name: "task",
      type: "input",
      message: "What's the updated task?",
    },
  ]);
  const idx = parseInt(index) - 1;
  if (!isNaN(idx) && idx >= 0 && idx < todos.length) {
    todos[idx].task = task;
    console.log(chalk.green("Task updated successfully!"));
  } else {
    console.log(chalk.red("Invalid index. Task not updated."));
  }
};

// Flag to control the main loop
let condition = true;

// Main loop to repeatedly ask for tasks until the user decides to stop
const main = async () => {
  console.log(banner); // Print the header
  while (condition) {
    // Prompt the user for a command
    const { cmd } = await inquirer.prompt([
      {
        name: "cmd",
        type: "list",
        message: "What would you like to do?",
        choices: [
          { name: "Add task", value: "add" },
          { name: "Delete task", value: "delete" },
          { name: "Update task", value: "update" },
          { name: "Read to-do list", value: "read" },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    // Perform the selected action
    switch (cmd) {
      case "add":
        await addTask();
        break;
      case "delete":
        await deleteTask();
        break;
      case "update":
        await updateTask();
        break;
      case "read":
        displayTodos();
        break;
      case "exit":
        condition = false;
        console.log(chalk.bold.blue("Goodbye!"));
        break;
    }
  }
};

main();

