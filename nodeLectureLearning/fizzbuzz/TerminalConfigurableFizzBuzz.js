
var number = process.argv[2];

/*
    value of fizz depends upon input from command line
    which is like
    export FIZZ="foo"
    if this statement is run then
    fizz var will have value of "foo"
    if not run then we assigned it on our own.

    export FIZZ="foo"
    take care of spaces write in terminal as it is given above.
 */

// process.env means all environment variables of our computer.
var fizz = process.env.FIZZ;
var buzz = process.env.BUZZ;

if(fizz == null)
    fizz = "fizz";
if(buzz == null)
    buzz = "buzz";

for(var i=1;i<=number;i++)
{
    if(i%3==0)
        console.log(fizz);
    if(i%5==0)
        console.log(buzz);
    if(i%3 !=0 && i%5!=0)
        console.log(i);
}