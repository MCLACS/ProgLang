main();

function main()
{
    var readline = require('readline');
    var rl = readline.createInterface({input:process.stdin, output:process.stdout, terminal:false});
    rl.setPrompt("Enter a number: ");
    rl.on('line', go);
    rl.on('close', function () { console.log("Bye"); });
    
    var fns = [];
    fns[0] = function () { console.log("Hello!"); };
    fns[1] = function () { console.log("Hola!"); };
    fns[2] = function () { console.log("Guten Tag!"); };
    fns[3] = function () { console.log("Bon Jour!"); };

    var counter = 0;
    rl.prompt();
    function go(line)
    {
        fns[line]();
        if (counter < 4)
        {
            counter++;
            rl.prompt();
        }
        else
        {
            rl.close();
        }
    }
}


