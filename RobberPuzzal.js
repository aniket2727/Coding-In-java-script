
// robbers puzzale in javascript




function rob(nums) {
    const n = nums.length;
    
    if (n === 0) {
        return 0;
    }
    
    if (n === 1) {
        return nums[0];
    }

    // Create an array to store the maximum loot at each house
    const dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Fill the dp array based on the choices made at each house
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[n - 1];
}
const houseMoney = [2, 7, 9, 3, 1];
const maxLoot = rob(houseMoney);
console.log(maxLoot); // Output: 12








