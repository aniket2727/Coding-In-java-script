



// runnig sum array

function Runnningsum(data){

    if(data.length==0 || data===null){
        return false;   
    }
    var sum=0;
    for(var i=0;i<data.length;i++){
        sum=sum+data[i]
        data[i]=sum;
    }


    return data;
}
const result=Runnningsum([1,2,3,4,5]);
console.log(result);