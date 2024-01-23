# DAY ONE -> 1

# Sum Zero for First Pair

## Problem Description

Given an array of integers, find the first pair whose sum equals zero. The function `getSumPairZero` takes an array of numbers as input and returns the first pair of elements whose sum is zero.

## Example

```javascript
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
```

## Approach

The current implementation uses a nested loop to iterate through the array and find the pair with a sum of zero. The function returns the pair as an array.

## Note

The current implementation assumes that there is only one pair with a sum of zero.
If no such pair is found, the function returns undefined.

## Future Improvements

This algorithm has a time complexity of O(n^2), where n is the length of the array. Consider optimizing for larger arrays.
Explore ways to handle cases where multiple pairs have a sum of zero.
