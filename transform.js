const arr = [1, 2, 3, 4]; // 2,4,6,8

const transArr = arr.map((a) => a * 2);

const even = arr.filter((a) => a % 2 === 0);

const sum = arr.reduce((a, b) => a + b);

console.log(sum);

console.log(transArr);

console.log(even);
