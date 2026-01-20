const reverseNum = (num) => {
  const x = num === Number(String(num).split("").reverse().join(""));
  //console.log(x);
};
reverseNum(565);

//factorial of num
const factorial = (z) => {
  let res = 1;
  for (let i = 1; i < z; i++) {
    return (res *= i);
  }
  console.log(res);
};
factorial(5);
