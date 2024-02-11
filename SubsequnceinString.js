function longestPrefix(data) {
    if (data === null) {
        return "";
    }

    data = data.sort();
    const firstWord = data[0];
    const lastWord = data[data.length - 1];

    let i = 0;
    while (i < firstWord.length && firstWord[i] === lastWord[i]) {
        i++;
    }

    return firstWord.substring(0, i);
}

const data = ["aniket", "anirudh", "angha"];
const result = longestPrefix(data);
console.log(result);
