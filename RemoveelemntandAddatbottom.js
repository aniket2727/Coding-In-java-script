
// remove given  element and add it last
//[1,2,2,3,3,4] and target is 2  then anwer is [1,2,3,3,4,2]


function removeElementAndMoveToEnd(data, target) {
    var l=data.length;
    for (let i = 0; i < l - 1; i++) {
        if (data[i] === target) {
            while (l > i + 1) {
                let temp = data[l - 1];
                data[l - 1] = data[i];
                data[i] = temp;
                l = l - 1;
            }
        }
    }

    return data;
}

var data = [1, 1, 2, 2, 3, 3];
const result = removeElementAndMoveToEnd(data, 2);
console.log(result);














