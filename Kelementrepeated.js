function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Count the frequency of each integer element
    for (const num of nums) {
        if (Number.isInteger(num)) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
    }

    const minHeap = new MinHeap();

    // Build the min heap with k frequent elements
    for (const [num, count] of frequencyMap.entries()) {
        if (minHeap.heap.length < k) {
            minHeap.push({ num, count });
        } else if (count > minHeap.heap[0].count) {
            minHeap.pop();
            minHeap.push({ num, count });
        }
    }

    // Extract the result from the min heap
    const result = [];
    while (minHeap.heap.length > 0) {
        result.unshift(minHeap.pop().num);
    }

    return result;
}

// Example usage:
const nums = [1, 2, 3, 1, 2, 2, 4, 5, 5, 5, 3, 'w'];
const k = 3;
const result = topKFrequent(nums, k);
console.log(result); // Output: [2, 5, 3]
