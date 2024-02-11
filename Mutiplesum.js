
//  two sum in the list

function Twosum(data, target) {
    var result = {};
    for(var i=0;i<data.length;i++){
        if(!result[i]){
            result[i]=1
        }
    }
    for (let i = 0; i < data.length; i++) {
        const diff = Math.abs(data[i] - target)
        if (result[diff]) {
            return true;
        }
    }
    return false;
}
var result = Twosum([1, 2, 5, 6, 4, 7], 999);
console.log("result of 2 sums",result)



// three sum in the list


function threeSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; 
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
var result = threeSum(nums, target);
console.log(result); 










