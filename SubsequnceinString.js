
// fondings the substring values 

function isSubsequence(string1, string2) {
    if (string1.length > string2.length) {
        return false;
    }

    var flag = true;

    for (var i = 0; i < string1.length; i++) {
        flag = false;
        for (var j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                flag = true;
                break;
            }
        }

        if (flag === false) {
            break;
        }
    }

    return flag;
}

const result = isSubsequence('abc', 'abefdf');
if (result) {
    console.log("This is a subsequence");
} else {
    console.log("Not a subsequence");
}
