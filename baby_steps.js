
const args = process.argv;
sum = 0 ;

for(var ind = 2;ind<args.length;ind++)
    sum+= Number(args[ind]);
console.log(sum);