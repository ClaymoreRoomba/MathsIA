const randList = (size, max = 100) => new Array(size).fill(0).map(() => Math.floor( Math.random() * (max - 1) + 1 ));
/*

BUBBLE
    1 [4, 3, 2, 1, 5]
    2 [3, 2, 1, 4, 5]
    3 [2, 1, 3, 4, 5]
    4 [1, 2, 3, 4, 5]
    5 [1, 2, 3, 4, 5]






*/

console.log(randList(10, 100));