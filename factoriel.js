const readline = require('readline');
const factoriel = a => {
   if(a != 0)
   {
      var res = a * factoriel(a-1)
   }
   if(a === 1)
   {
      return 1;
   }
   return res;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  console.log(`The factoriel of ${number} is ${factoriel(number)}`);
  rl.close();
});
