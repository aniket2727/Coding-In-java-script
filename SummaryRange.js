


// summmary range for the array
// [1,2,3,5,6,8]===answer is [1,2,3,4,5,6,7,8]



function SummmaryRange(data) {
    const result = {}
    const ans = []
    for (var i = 0; i < data.length; i++) {
        if (data[i]+1 != data[i+1]) {
            if (!result[data[i + 1]]) {
                result[data[i] + 1] = 1
            }
        }
        result[data[i]] = 1
    }
    return   Object.keys(result).map(Number);

}


const result = SummmaryRange([1, 2, 3, 5, 6, 8])
console.log(result);
