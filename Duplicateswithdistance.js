





// numbers duplicates with the certain distancess




function Numbersduplicateswiththedistance(data, k) {
    var result = []
    k=k+1;
    for (var i = 0; i < data.length; i++) {
        if (!result.includes(data[i])) {
            for (var j = i + 1; j < data.length; j++) {
                if (data[i] === data[j]) {
                    if (k >j - i) {
                        result.push(data[i])
                    }
                }
            }
        }
    }


    return result
}

const data = [1, 3, 2, 3, 4, 2, 5, 3,1]
const result = Numbersduplicateswiththedistance(data, 3)

console.log(result);





//this is standard output



// function numbersDuplicatesWithDistance(data, k) {
//     const lastSeenIndex = [];
//     const result = [];

//     for (let i = 0; i < data.length; i++)
//         if (lastSeenIndex[data[i]] !== undefined && i - lastSeenIndex[data[i]] <= k)
//             result.push(data[i]);
//         else
//             lastSeenIndex[data[i]] = i;

//     return result;
// }

// const data = [1, 3, 2, 3, 4, 2, 5, 3, 1];
// const result = numbersDuplicatesWithDistance(data, 3);
// console.log(result);