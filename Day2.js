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

//0(n) linear time complexity (কারণ এখানে শুধুমাত্র একবার লুপ চলেছে। একবার লুপ চললে তাকে linear বা 0(n) বলা হয়। অপরদিকে দুইবার লুপ চললে তাকে 0(n^2) quadratic time complexity বলা
