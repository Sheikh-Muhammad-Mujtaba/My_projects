#! /usr/bin/env node

import inquirer from "inquirer"; // Importing the 'inquirer' library for handling user input

// Prompt the user to enter a sentence
const answers: { 
    sentence: string; // Define the type of the answers object
} = await inquirer.prompt([ // Use await to asynchronously wait for user input
    {
        type: "input", // Specify the input type as text
        name: "sentence", // Name of the property where the user input will be stored
        message: "Enter a sentence: ", // Prompt message displayed to the user
    },
]);

// Split the entered sentence into an array of words
const words = answers.sentence.trim().split(" "); // Remove leading and trailing spaces, then split the sentence at spaces

console.log(words); // Log the array of words to the console

// Log the number of words in the sentence using string interpolation
console.log(`Your sentence has ${words.length} words`);
