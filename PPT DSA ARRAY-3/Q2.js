function fourSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;
  const result = [];

  for (let i = 0; i < n - 3; i++) {
    // Skip duplicate values of the first number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicate values of the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]; // Calculate the current sum

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]); // Found a quadruplet, add it to the result

          // Skip duplicate values of the third and fourth numbers
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++; // Sum is smaller than the target, move the left pointer to the right
        } else {
          right--; // Sum is larger than the target, move the right pointer to the left
        }
      }
    }
  }

  return result;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const quadruplets = fourSum(nums, target);
console.log(quadruplets); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]