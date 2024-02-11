

// majority element in list


// [1,2,2,1,4,2,2]=2




function majorityElement(data) {
    var maxCount = 0;
    var count = 0;
    var value = 0;

    if (data === null) {
        return false;
    }

    for (var i = 0; i < data.length; i++) {
        count = 0;
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] === data[j]) {
                count = count + 1;
            }
        }
        if (maxCount < count) {
            maxCount = count;
            value = data[i];
        }
    }
    return value;
}

const result = majorityElement([1, 4, 3, 3, 3, 2, 1]);
console.log(result);






