/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */
//loop through each element
//if one element shows up more than once return true
//two loops, first loop iterates through the array and the second loop starts at i+1 and checks if the previous element matches
//dont forget to use an object this time bryan
//check if its already in the object if it is return true if not then =true to continue the loop and check if the number shows up again
const containsDuplicate = (nums) => {
  const obj = {};
  for(let i=0; i<nums.length;i++){
    if(obj[nums[i]]){
    return true;
    } else {
      obj[nums[i]] = true;
    }
  };
    return false;
  //write your code here
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true