const fs = require('fs');
const file = process.argv[2];
let content = fs.readFileSync(file, { encoding: 'utf-8' });

content = content.replace(/(\/\* .+ \*\/)|^/, `/* node.js/${file} */`);

fs.writeFileSync(file, content);
