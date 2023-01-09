function hasTargetSum(array=[], target) {
  // Write your algorithm here
  console.log(array.length)
  // for (let i = 0; i < array.length; i++) {
  //   if ((array[i]) > target) {
  //     array.splice(i, 1);
  //     i--
  //   } 
  // }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
hasTargetSum([-7, 10, 4, 8], 3)
/* 
  Write the Big O time complexity of your function here

  
*/

/* 
  Add your pseudocode here

  for (i = 0; i < array.length - 1; i++) {
    if (array[i]) > targetNumber
    array.splice(i)
  }
*/

/*
  Add written explanation of your solution here

  The function should check if any two numbers in the array can be added together to produce the target number
  So, hasTargetSum([3, 8, 12, 4, 11, 7], 10) would return true as the array contains 7 and 3, 7 + 3 = target number 10
  Get the length of the array 
  2 for loops, 
  check if number is greater than target, if true, remove number from array and continue loop
  if false, check the sum of array[0] + other numbers until all of the array has been checked
  Then, add 1 to index and -1 to length, check array[1] against remaining numbers
  continue until all numbers sums have been checked
  if any equals target number, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
