#! /usr/bin/env node

// Import the inquirer library to allow user input
import inquirer from "inquirer";

// Generate a random number between 1 and 10
const randomnumber = Math.floor(Math.random() * 10 + 1);

// Collect the user's guess
const answers = await inquirer.prompt([
  {
    // Set the name of the user's input as 'userGussedNumber'
    name: "userGussedNumber",
    // Specify the type of user input as a number
    type: "number",
    // Display the input message to the user
    message: "Please guess a number between 1 to 10:",
  },
]);

// Check if the user's guess matches the random number
if (answers.userGussedNumber === randomnumber) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  // If the user's guess is incorrect, let them know and display the correct number
  console.log("Sorry, You guess wrong number");
  console.log(`Correct number is ${randomnumber}`);
}