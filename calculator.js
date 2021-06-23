const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if (b === 0) {
      throw console.error("Can't divide by zero");
    } else {
      return a / b;
    }
  },
  multiply: (a, b) => {
    return a * b;
  },
};

module.exports = Calculator;
