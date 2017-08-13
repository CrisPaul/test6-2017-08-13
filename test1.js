function findMidNum(numArr) {
    let sortedArr = numArr.sort((a, b) => a - b);
    var index = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[index] + sortedArr[index - 1]) / 2
    } else {
        return sortedArr[index];
    }
}

console.log("findMidNum([1,2,3,4,5,6]):  " + findMidNum([1,2,3,4,5,6]));
console.log("findMidNum([1,2,3,4,5]):  " + findMidNum([1,2,3,4,5]));