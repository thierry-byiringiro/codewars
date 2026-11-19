const arraySum = (arr) => {
    return arr.flat(Infinity).filter((el) => typeof el === "number").reduce((a,b) => a + b,0)
}
// Test 1
console.log(arraySum([1, 2, 3, 4]));
// Output: 10

// Test 2
console.log(arraySum([1, "hello", 2, true, 3, null]));
// Output: 6

// Test 3
console.log(arraySum([1, 2, [3, 4], 5]));
// Output: 15

// Test 4
console.log(arraySum([1, [2, 3], [[4, 5], 6], 7]));
// Output: 28

// Test 5: Eight levels of nesting
console.log(arraySum([1, [2, [3, [4, [5, [6, [7, [8]]]]]]]]));
// Output: 36

// Test 6: No numbers
console.log(arraySum(["hello", true, null, ["world"]]));
// Output: 0

// Test 7: Empty array
console.log(arraySum([]));
// Output: 0

// Test 8: Empty nested arrays
console.log(arraySum([[], [[], []], 5]));
// Output: 5

// Test 9: Negative numbers
console.log(arraySum([-1, [-2, [3]], 4]));
// Output: 4

// Test 10: Decimal numbers
console.log(arraySum([1.5, [2.5, [3.5]]]));
// Output: 7.5

// Test 11: Zero
console.log(arraySum([0, [0, [5]]]));
// Output: 5
