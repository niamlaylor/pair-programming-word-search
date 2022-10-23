const wordSearch = (letters, word) => {
    let containsWord = false;

    if (letters.length === 0) {
        return containsWord;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    let verticalJoin = [];

    for (let i = 0; i < letters[0].length; i++) {
        verticalJoin[i] = Array(letters.length).fill(i);
      }
    for (let i = 0; i < verticalJoin.length; i++) {
        for (let x = 0; x < verticalJoin[i].length; x++) {
            verticalJoin[i][x] = letters[x][i];
        }
    }
    let verticalWords = verticalJoin.map(ls => ls.join(''));
    for (let i = 0; i < verticalWords.length; i++) {
        if (verticalWords[i].includes(word)) {
            containsWord = true;
        }
    }
    for (let i = 0; i < horizontalJoin.length; i++) { // For checking horizontal rows
        if (horizontalJoin[i].includes(word)) {
            containsWord = true;
        }
    }
    return containsWord;
};

module.exports = wordSearch;