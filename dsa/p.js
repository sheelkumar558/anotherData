//build array from permutions
function per(nums){
    return nums.concat(nums);
    let output = [];
      for(let i = 0; i < nums.length *2 ; i++){
          output.push(nums[i%nums.length]);
     
      }
      return output;
  
}
let nums=[1,2,1];
console.log(per(nums));
