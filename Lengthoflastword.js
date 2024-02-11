


//  lenght of last word in the string

// string ="i am  full stack developer coder    "   ans is 5 

function Lengthoflastword(item){
    var l=item.length
    var count=0
    if(item===null || l===1){
        return 0;
    }
    while(l>1 && item[l-1]==' '){
        l=l-1;
    }
    while(l>1 && item[l-1]!==' ')
    {
        l=l-1;
        count=count+1
    }
    return count;
}

const result=Lengthoflastword("I am full stack developer coder   ")
console.log(result);









