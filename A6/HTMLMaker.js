function makeElement(tag, text, children)
{
    function toString()
    {
        var tabs = "";
        //for (var i = 0; i < this.level; i++)
        //    tabs += "          ";

        var ret = tabs + "<"+this.tag+">";
        ret += this.text + "\n";
        for (var key in this.children)
        {
            var child = this.children[key]
            ret += child.toString() + "\n";
        }
        ret += tabs + "</"+this.tag+">";
        return ret;
    }
    
    function addChild(child)
    {
        this.children.push(child);
    }
    
    function updateLevel()
    {
        this.level = this.level+1; 
        for (var key in this.children)
        {
            children[key].updateLevel();
        }
    }   
    
    var obj = {"tag": tag, 
               "text": text, 
               "level": 0,
               "children": children, 
               "toString": toString,
               "updateLevel": updateLevel,
               "addChild": addChild};
               
    obj.updateLevel();
    
    return obj;
}

function main()
{
    var e = makeElement("top", "I am top", 
        [ 
            makeElement("child1", "I am child 1", 
            [
                makeElement("child1-1", "I am child 1-1"),
                makeElement("child1-2", "I am child 1-2") 
            ]), 
            makeElement("child2", "I am child 2", []), 
            makeElement("child3", "I am child 3", []), 
            
        ]);
    console.log(e.toString());
}

main();