function sort(values) {
  var length = values.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (values[i] > values[i+1]) {
        [values[i], values[i+1]] = [values[i+1], values[i]];//This is a way of swapping in ES6. You can just use a temp variable to swap.
        swapped = true;
      }
    }
  }
  while(swapped == true)
  return values;
};

var arrayOfNumbers = [1, 4, 6, 12, 18, 22, 27, 33, 35, 38, 40, 44, 49, 50, 52];

console.log(sort(arrayOfNumbers));
