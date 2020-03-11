function getMathModule(x) {
  let y = 90;
  return {
    sum: () => {
      return x + y;
    },
    substract: () => {
      return x - y;
    },
    multiply: () => {
      return x * y;
    },
    divide: () => {
      return x / y;
    }
  };
}

let result = getMathModule(5);

console.log(result);
console.log(result.sum());
