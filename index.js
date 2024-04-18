#! /usr/bin/env node
//import inquirer
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellowBright.bold("\n \t *---Welcome to Code with Hira-Word_Counter---*\n"));
//Declare a constant
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright.bold("Enter Your Sentence for words counting:"),
    }
]);
const words = answers.sentence.trim().split(" ");
//print array on console
console.log(words);
//print the word count
console.log(chalk.magentaBright.bold(`Your sentence word count is: ${words.length}`));
