// add digits into problems
//first methods
function addDigits(data){
    var sum = 0;
    while (data >= 10) {
        var temp = data % 10;
        data = Math.floor(data / 10);
        sum = sum + temp;
    }

    sum = sum + data;
    if (sum >= 10) {
        return addDigits(sum);
    } else {
        return Math.floor(sum);
    }
}

const result = addDigits(2019);
console.log(result);



// second methods


function addsum(data){
    if(data==0){
        return 0
    }

    if(data%9==0){
        return 9
    }
    
    else{
        return data%9
    }

}


const result1 = addsum(2019);
console.log(result1);




