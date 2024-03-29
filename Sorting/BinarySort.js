

const nums = [-1,0,3,5,9,12], target = 9


var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] === target){
            return mid;
        } else if(target > nums[mid]){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(search(nums, target))