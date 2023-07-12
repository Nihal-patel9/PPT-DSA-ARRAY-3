function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Calculate the current sum

      if (sum === target) {
        return sum; // Found an exact match, return the sum
      }

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Sum is smaller than the target, move the left pointer to the right
      } else {
        right--; // Sum is larger than the target, move the right pointer to the left
      }
    }
  }

  return closestSum;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSumClosest(nums, target);
console.log(closestSum); // Output: 2