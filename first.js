function f(a,b)
{
    var n= arguments.length;
    for(var i=0;i<n;i++)
    {
        console.log(arguments[i]);
    }
}

f(1,2,3,3,undefined,3,3);