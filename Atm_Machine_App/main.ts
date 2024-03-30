#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance: number = 50000; // Initial balance of the user

let myPin: number = 1234; // Pin number of the user

async function start() {
  // Prompt the user to enter their pin number
  const pin = await inquirer.prompt<{ q1: number }>({
    name: "q1",
    message: "Enter your pin number",
    type: "number",
  });

  if (pin.q1 === myPin) {
    // If the entered pin number matches the stored pin number, display the balance
    console.log(myBalance);

    // Prompt the user to select an option
    const operationAns = await inquirer.prompt<{ operation: string }>([
      {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["Withdraw", "Check balance"],
      },
    ]);

    // If the user selects "Withdraw", prompt them to select an option
    if (operationAns.operation === "Withdraw") {
      const amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Choose the option to withdraw?",
          type: "list",
          choices: [10000, 5000, 1000, 500, "other"],
        },
      ]);
      if (amountAns.amount === "other") {
        const customAmount = await inquirer.prompt<{ custom: number }>([
          {
            name: "custom",
            message: "Input a custom amount: ",
            type: "number",
          },
        ]);
        makeWithdrawal(customAmount.custom);
        }  else if (amountAns.amount <= myBalance) {
        const a = (myBalance -= Number(amountAns.amount));
        console.log(
          `You withdrew $${amountAns.amount}, your new balance is $${a}`
        );
      } 
    } else {
      // If they selected anything other than "withdraw" show the current balance
      console.log("Your current balance is: ", myBalance);
    }
  } else {
    console.log("Incorrect PIN");
  }
}

// Function that handles making a withdrawal from the account
async function makeWithdrawal(amount: number) {
  // Check if there are enough funds in the account for this transaction
  if (amount > myBalance) {
    console.log(
      `Sorry, you do not have sufficient funds. Your current balance is ${myBalance}.`
    );
  } else {
    // Subtract the amount of the withdrawal from the users balance and update it
    myBalance -= amount;
    console.log(`You withdrew $${amount}, your new balance is $${myBalance}`);
  }
}
start();

