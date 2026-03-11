#!/usr/bin/env node
//  ai formate ata first code kolta hova 
//terminal call -> npm install -g


import readline from 'readline';
import chalk from 'chalk';
import { type } from 'os';


// create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//  define question you want to ask user 

const questions = [
    {
        type: 'input',
        name: 'name',
        message: chalk.blue("What is your name?")
    }, {
        type: 'input',
        name: 'age',
        message: chalk.green("How old are you?"),
        validate: (value) => {
            if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
                return true;
            } else {
                return chalk.red("Please Inter a valid age");
            }
        }
    },
    {
        type: 'input',
        name: 'city',
        message: chalk.yellow("Where are live?")
    },
    {
        type: 'confirm',
        name: 'agree',
        message: chalk.cyan('Do you agree to the above information?'),
        default: true,
    }
]

// function to ask question recursively
const askQuestion = (index = 0, answers = {}) => {
    // if all question are answered and display it
    if (index >= questions.length) {
        console.log(chalk.green('\n Here is your information'));
        console.log(`Name: ${answers.name}`);
        console.log(`Age: ${answers.age}`);
        console.log(`City: ${answers.city}`);
        console.log(`Agreed: ${answers.agree ? chalk.green("Yes") : chalk.red("No")}`);

        // readline close 
        rl.close();
        return;
    }


    // get the current question object
    const question = questions[index];

    // ask the question 
    rl.question(question.message + '', (answer) => {
        if (question.validate) {
            const validation = question.validate(answer);

            if (validation !== true) {
                console.log(validation);
                return askQuestion(index, answers)
            }
        }

        // store the answer in answers object 

        answers[question.name] = answer;

        // ask the next question 
        askQuestion(index + 1, answers);
    })
}


//?   start asking

askQuestion();