const digitalRoot = number => {
  if (String(number).split('').length == 1) {
    return number;
  } else {
    let sum
    sum = String(number).split('').reduce((a, b) => +a + +b);
    if (String(sum).split('').length == 1) {
      return sum;
    } else {
      return digitalRoot(sum);
    }
  } 
};

console.log(digitalRoot(89)); // 8 + 9 = 17, 1 + 7 = 8
console.log(digitalRoot(1823)); // 1 + 8 + 2 + 3 = 14, 1 + 4 = 5
