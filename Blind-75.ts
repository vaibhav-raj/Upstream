Blind 75 :  DSA questions 
================================================================================================================================================================================
Problem 1: Two Sum
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//bruteforce
function twoSum(nums, target) {
	const length = nums.length
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (nums[i] + nums[j] === target)return [i, j]
		}
	}
  return [];
}

//optimal approach
function twoSum(nums, target) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]     
		if (map.has(diff)) return [map.get(diff), i];   // if diff value is present in map return or else set the ith value in map
		else map.set(nums[i], i)
	}
	return []
}
================================================================================================================================================================================
Problem 2: Best Time to Buy and Sell Stock
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. 
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//bruteforce
function maxProfit(prices) {
	let maxProfit = 0
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const profit = prices[j] - prices[i];
			if (profit > maxProfit) { 
				maxProfit = profit
			}
		}
	}
  return maxProfit
}
//optimal approach
function maxProfit(prices) {
	let min = prices[0]   
	let profit = 0

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < min) {  // updating min value of share price
			min = prices[i]
		}
		profit = Math.max(profit, prices[i] - min)  // take the max value of profit 
	}
	return profit
}
================================================================================================================================================================================
Problem 2: Contains Duplicate
Input: nums = [1,2,3,1]
Output: true

//bruteforce
function containsDuplicate(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) return true
		}
	}
	return false
}
// better approach
function containsDuplicate(nums) {
	for (let i = 0; i < nums.length; i++) {
    nums= nums.sort((a,b) => a-b)
      if(nums[i]===nums[i+1]) return true  
	}
  return false
}
// optimal approach
function containsDuplicate(nums) {
  const map = new Map()
	for (let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) return true
    else map.set(nums[i])
	}
  return false
}
================================================================================================================================================================================
