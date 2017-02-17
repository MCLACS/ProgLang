main();

function main() 
{
    function add(nums) 
    {
        var total = 0;
        for (var i in nums)
            total = total + parseInt(nums[i]);
        return total;
    }

    function sub(nums) 
    {
        if (nums.length < 2)
            return 0;
        
        var diff = nums[0];
        for (var i in nums)
        {
            if (i == 0) continue;
            diff = diff - parseInt(nums[i]);
        }
        return diff;
    }

    function mult(nums) 
    {
        var prod = 1;
        for (var i in nums)
        {
            prod = prod * parseInt(nums[i]);
        }
        return prod;
    }
    
    var operations = {"+" : add, "-" : sub, "*" : mult};
    var readline = require('readline');
    var rl = readline.createInterface(
    {
        input: process.stdin, 
        output: process.stdout, 
        terminal: false
    });
    
    rl.setPrompt("Enter an expression: ");
    
    rl.on('line', function (line) 
    {
        var start = line.indexOf("(");
        if (start > -1)
        {
            var op = line.charAt(start+1);
            var end = line.indexOf(")");
            if (end > -1)
            {
                var params = line.substring(start+3, end).split(" ");
                var result = operations[op](params);
                console.log(result);
            }
        }
        rl.close();
    });    
    
    rl.prompt();
}