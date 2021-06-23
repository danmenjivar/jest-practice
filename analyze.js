function analyze(array) {
  const obj = {};
  obj.average = findAverage(array);
  obj.min = findMin(array);
  obj.max = findMax(array);
  obj.length = array.length;
  return obj;
}

function findAverage(array) {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });

  return total / array.length;
}

function findMin(array) {
  let min = Infinity;
  array.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });

  return min;
}

function findMax(array) {
  let max = -Infinity;
  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

module.exports = analyze;
