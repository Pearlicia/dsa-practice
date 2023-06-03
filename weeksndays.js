// Emma's boss needs to know how much time they have to prepare for certain important events. Emma created a spreadsheet 
// with the number of days, and presented to the boss. The boss then clarified that she needed the time to be in the number 
// of weeks and days format ( '3 weeks + 2 days' instead of 23 days). Now Emma needs to rework the entire sheet with a very 
// large number of events.  Write a program in javascript that will convert the number of days to the number of weeks and days format
// Example 00: sample input: 32. sample output: 4 weeks + 4 days
// Example 01: sample input: 3. sample output:  3 days
// Example 02: sample input: 7. sample output: 1 week
// Example 03: sample input: 8. sample output: 1 week + 1 day
// Example 04: sample input: 0. sample output: 0 days
 


function convertToWeeksAndDays(days) {
    if (days === 0) {
      return "0 days";
    }
  
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    var result = "";
  
    if (weeks > 0) {
      result += weeks + " week";
      if (weeks > 1) {
        result += "s";
      }
      result += " ";
    }
  
    if (remainingDays > 0) {
      result += remainingDays + " day";
      if (remainingDays > 1) {
        result += "s";
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(convertToWeeksAndDays(21));
  console.log(convertToWeeksAndDays(22));
  console.log(convertToWeeksAndDays(32)); // Output: 4 weeks + 4 days
  console.log(convertToWeeksAndDays(3)); // Output: 3 days
  console.log(convertToWeeksAndDays(7)); // Output: 1 week
  console.log(convertToWeeksAndDays(8)); // Output: 1 week + 1 day
  console.log(convertToWeeksAndDays(0)); // Output: 0 days
  