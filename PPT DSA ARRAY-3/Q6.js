function singleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}

// Example usage
const nums = [2, 2, 1];
const single = singleNumber(nums);
console.log(single); // Output: 1