



//count of each element in the list


function countofeachword(data){
        let result={}
        for(let i=0;i<data.length;i++){
            if(result[data[i]]){
                result[data[i]]+=1;
            }
            else{
                result[data[i]]=1
            }
        }
        return result;
}



const result=countofeachword([1,2,2,3,4,4,4,5,6])
console.log(result);