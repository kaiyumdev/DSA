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
