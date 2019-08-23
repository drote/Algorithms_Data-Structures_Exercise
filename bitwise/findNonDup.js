// find number that does not have a double bitwise

function singleNumber(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i += 1) {
      res = res ^ nums[i];
  }
  
  return res;
};
