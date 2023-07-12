function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found at index mid
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return left; // Target not found, return the index where it would be inserted
}

// Example usage
const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);
console.log(index); // Output: 2