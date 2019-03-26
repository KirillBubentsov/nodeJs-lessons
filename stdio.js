const stdin = process.stdin;
const stdout = process.stdout;

stdout.write('Hello, what is your name?')

stdin.on('data', (input) => {
   const name = input.toString().trim();
   const reverseName = name.split('').reverse().join('');
   stdout.write(`\n${name}, your reverse name is ${reverseName}`);
   process.exit();
})

process.on('exit', () => {
    stdout.write(`\n\nGood luck for NodeJs!!`);
})