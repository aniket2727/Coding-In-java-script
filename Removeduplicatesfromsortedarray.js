



//remove duplicateds from sorted array  
function removeDuplicates(data) {
    if (data.length <= 1) {
        return data;
    }
    let result = [data[0]];
    for (let i = 1; i < data.length; i++) {
        if (data[i] !== data[i - 1]) {
            result.push(data[i]);
        }
    }
    return result;
}

const result = removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6]);
console.log(result);
