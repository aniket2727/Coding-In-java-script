// smallest in sorted rotated array

function smallestInRotatedArray(data){
    var s = 0;
    var e = data.length - 1;
    
    while(s < e){
        var m = s + Math.floor((e - s) / 2);

        if(data[m] > data[e]){
            s = m + 1;
        } else {
            e = m;
        }
    }
    return data[s];
}

const result = smallestInRotatedArray([4, 5, 6, 7, 1, 2, 3]);
console.log(result);
