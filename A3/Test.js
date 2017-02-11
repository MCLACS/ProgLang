main();

function main()
{
    var readline = require('readline');
    var rl = readline.createInterface(
    {
        input: process.stdin, 
        output: process.stdout, 
        terminal: false
    });
    
    rl.setPrompt("Enter your name: ");
    
    rl.on('line', function (line) { 
        console.log("Hello " + line); 
        rl.close();
    });
    
    rl.on('close', function () { 
        console.log("Bye"); 
    });
    
    rl.prompt();
}


