

//  find the substring present in string or not




function findString(a, b) {
    if (a === null || b === null) {
        return false;
    }

    if (a.length > b.length) {
        return false;
    }

    let j = 0;
    
    for (let i = 0; i < b.length; i++) {
        if (j === a.length) {
            return true;
        }
        else {
            if (a[j] === b[i]) {
                j = j + 1;
            } else {
                j = 0;
            }
        }
    }

    return j === a.length;
}

const result = findString('sub', 'aksubsshs');
console.log(result); // Output: true




// function findString(a, b) {
//     return a !== null && b !== null && b.includes(a);
// }

// const result = findString('sub', 'aksubsshs');
// console.log(result); // Output: true
