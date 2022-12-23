/* node.js/ch03/3.5/readline-promises.js */
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ')
  .then((answer) =>
    console.log(`Thank you for your valuable feedback: ${answer}`)
  )
  .finally(() => rl.close());
