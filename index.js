#! /usr/bin/env node
import inquirer from "inquirer";
//1)computer will generate a random number
//2) user input for guessing number
//3)campare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "Number",
        message: "please guess number between 1-5:",
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("congrates you guess right");
}
else {
    console.log("shit! you donot guess right number");
}
