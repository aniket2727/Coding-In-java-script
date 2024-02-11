



// first letter apppers twice

function firstletterappeartwice(data){
    const result={}
    if(data===null || data.element===0){
        return false;
    }

   for(var i=0;i<data.length;i++){
    if(!result[data[i]]){
        result[data[i]]=1
    }
    else{
        return data[i];
    }
   }
}

const result=firstletterappeartwice(['aniket','kadam','kadam','vijay'])
console.log(result);