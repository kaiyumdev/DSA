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

# DAY ONE -> 2

# Finding the First Pair with Sum Zero in a Sorted Array

## Description

The `findSumZero` function takes a sorted array as input and efficiently searches for the first pair of elements whose sum is zero. The algorithm employs a two-pointer approach to traverse the array and find the pair.

## Usage

```javascript
//checking first sum zero pair
function findSumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = findSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
const result = findSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result); // Output: [-4, 4]
//0(n) linear time complexity
```

## Approach

1. **Initialize Pointers:**

   - `left` is set to the beginning of the array (index 0).
   - `right` is set to the end of the array (index `array.length - 1`).

2. **Iterative Comparison:**

   - Use a `while` loop to iterate through the array until `left` is less than `right`.
   - Calculate the sum of the elements at the current `left` and `right` indices: `sum = array[left] + array[right]`.

3. **Check Sum:**

   - If `sum` is equal to zero, return the pair `[array[left], array[right]]` as it satisfies the condition.
   - If `sum` is greater than zero, decrement `right` to explore smaller values.
   - If `sum` is less than zero, increment `left` to explore larger values.

4. **End Condition:**
   - The loop continues until `left` becomes greater than or equal to `right`.

## Example

For the input array `[-5, -4, -3, -2, 0, 2, 4, 6, 8]`:

- The function will find the pair `[-4, 4]` because `(-4) + 4 = 0`.
- The pointers move towards each other until the sum is found.

# Day -> 3

# Anagram Checker

This is a simple JavaScript function that checks if two input strings are anagrams of each other.

## Function

The function `isAnagram(str1, str2)` takes two strings as input and returns `true` if they are anagrams and `false` otherwise.

## How It Works

1. The function first checks if the lengths of the two strings are different. If they are, it immediately returns `false` because anagrams must have the same number of letters.

2. It then creates an empty object to keep track of the frequency of each letter in the first string.

3. The function then iterates over each letter in the first string, incrementing the corresponding count in the object.

4. Next, the function iterates over each letter in the second string. If a letter in the second string is not in the object or its count is 0, it means that the second string contains a letter that is not in the first string or it has more of a certain letter than the first string does. In either case, the function returns `false`.

5. If a letter in the second string is in the object, the function decrements the count in the object.

6. If the function has not returned `false` after checking all the letters in the second string, it means that the two strings are anagrams, so it returns `true`.

## Example Usage

```javascript
//String Anagram
//'hello' -> 'llheo'

function isAnagram(str1, str2) {
  // Check if the lengths of the strings are different
  if (str1.length != str2.length) {
    return false;
  }

  // Initialize an object to store the frequency of each letter in str1
  let counter = {};

  // Count the frequency of each letter in str1
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  // Check if str2 has the same frequencies of letters as str1
  for (let item of str2) {
    if (!counter[item]) {
      // If a letter is not present in str1 or has already been used in str2
      return false;
    }
    counter[item] -= 1; // Decrement the count of the letter in the counter
  }

  // If both strings have the same frequencies of letters, they are anagrams
  return true;
}

// Example usage
const check = isAnagram("hello", "llheo");
console.log(check); // Output: true
```
