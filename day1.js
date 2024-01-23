//checking First sum zero pair - problem 1
//[-5,-4,-3,-2,0,2,4,6,8] -> input

function getSumPairZero(array) {
  //use simple for loop to solve the problem
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    // console.log(number);
    for (let i = 1; i < array.length; i++) {
      if (number + array[i] === 0) {
        console.log(number, array[i]);
      }
    }
  }

  //use simple for of loop to solve the same problem
  for (let number of array) {
    for (let i = 1; i < array.length; i++) {
      //   console.log(number, array[i]);
      if (number + array[i] === 0) {
        console.log("sum zero", number, array[i]);
        return [number + array[i]];
      }
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
