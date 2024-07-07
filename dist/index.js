#! /usr/bin/env node
// handle the command-line interface using Inquirer.
import inquirer from 'inquirer';
import todoManager from './todo.js';
const main = async () => {
    let exit = false;
    while (!exit) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add Todo', 'Remove Todo', 'Complete Todo', 'List Todos', 'Exit']
        });
        switch (action) {
            case 'Add Todo':
                const { task } = await inquirer.prompt({
                    type: 'input',
                    name: 'task',
                    message: 'Enter the task:'
                });
                todoManager.add(task);
                console.log('Todo added!');
                break;
            case 'Remove Todo':
                const { removeId } = await inquirer.prompt({
                    type: 'input',
                    name: 'removeId',
                    message: 'Enter the ID of the todo to remove:'
                });
                todoManager.remove(parseInt(removeId));
                console.log('Todo removed!');
                break;
            case 'Complete Todo':
                const { completeId } = await inquirer.prompt({
                    type: 'input',
                    name: 'completeId',
                    message: 'Enter the ID of the todo to complete:'
                });
                todoManager.complete(parseInt(completeId));
                console.log('Todo completed!');
                break;
            case 'List Todos':
                console.log('Todos:');
                todoManager.list().forEach(todo => {
                    console.log(`${todo.id}: ${todo.task} [${todo.completed ? 'Completed' : 'Incomplete'}]`);
                });
                break;
            case 'Exit':
                exit = true;
                break;
        }
    }
};
main();
