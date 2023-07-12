function nextPermutation(nums) {
  const n = nums.length;
  let i = n - 2;

  // Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;

    // Find the first element larger than the decreasing element
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // Swap the decreasing element with the next larger element
    swap(nums, i, j);
  }

  // Reverse the elements after the decreasing element
  reverse(nums, i + 1, n - 1);
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

// Example usage
const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]