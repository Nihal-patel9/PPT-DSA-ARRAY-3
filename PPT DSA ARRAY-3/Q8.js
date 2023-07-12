function canAttendMeetings(intervals) {
  // Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Check for overlapping intervals
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      // Overlapping intervals found
      return false;
    }
  }

  // No overlapping intervals found
  return true;
}

// Example usage
const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const result = canAttendMeetings(intervals);
console.log(result); // Output: false