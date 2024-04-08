#! /usr/bin/env node
import inquirer from "inquirer";
// Define conversion rates (dummy values for demonstration)
const conversionRates = {
    USD: 1, // Base Currency 1 USD = 1 USD     United States Dollar
    EUR: 0.92, // 1 USD = 0.92 EUR          Euro 
    GBP: 0.76, // 1 USD = 0.76 GBP          British Pound Sterling
    CAD: 1.25, // 1 USD = 1.25 CAD          Canadian Dollar 
    AUD: 1.32, // 1 USD = 1.32 AUD          Australian Dollar 
    NZD: 1.44, // 1 USD = 1.44 NZD          New Zealand Dollar 
    AED: 3.67, // 1 USD = 3.76 AED          United Arab Emirates Dirham 
    SAR: 3.75, // 1 USD = 3.74 SAR          Saudi Riyal 
    CNY: 6.40, // 1 USD = 6.40 CNY          Chinese Yuan 
    TRY: 13.5, // 1 USD = 13.5 TRY          Turkish Lira 
    INR: 75.50, // 1 USD = 75.50 INR         Indian Rupee
    PKR: 277.54 // 1 USD = 277.54 PKR        Pakistani Rupee
};
// Prompt user for input
let user_answer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select the currency to convert to:",
        choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:",
    },
]);
let fromAmount = conversionRates[user_answer.fromCurrency];
let toamount = conversionRates[user_answer.toCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toamount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toamount);
console.log(amount);
console.log(`you converted ${amount} from ${user_answer.fromCurrency} to ${user_answer.toCurrency} is equal to :${convertedAmount}`);
