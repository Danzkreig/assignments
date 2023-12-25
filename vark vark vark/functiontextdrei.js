// const arr = [1, 2, 3, 4, 5, 6, 7];
// const word = ["cat", "dog", "elephant", "lion", "apple", "banana", "cherry"];
// const property = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// const multiple = [1, "apple", true, 42, "banana"];
// // Double the Numbers:
// // Input: [1, 2, 3, 4]
// // Output: [2, 4, 6, 8]
// console.log(arr.map((bs) => bs * 2));
// // Filter Even Numbers:
// // Input: [1, 2, 3, 4, 5]
// // Output: [1, 3, 5]
// console.log(arr.filter((number) => number % 2 === 0));
// // Square and Filter:
// // Input: [1, 2, 3, 4, 5], Threshold: 10
// // Output: [1, 4, 9, 16, 25]
// // Uppercase Strings:
// // Input: ['apple', 'banana', 'cherry']
// // Output: ['APPLE', 'BANANA', 'CHERRY']
// console.log(word.map((word) => word.toUpperCase()));
// // Filter by Length:
// // Input: ['cat', 'dog', 'elephant', 'lion'], Min Length: 4
// // Output: ['elephant', 'lion']
// console.log(word.filter((word) => word.length >= 4));
// // Extract Names:
// // Input: [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]
// // Output: ['Alice', 'Bob', 'Charlie']
// console.log(property.map((word) => word.name));
// // Filter by Type:
// // Input: [1, 'apple', true, 42, 'banana'], Target Type: 'string'
// // Output: ['apple', 'banana']
// console.log(multiple.filter((word) => typeof word == "string"));
// // Calculate Squares:
// // Input: [2, 4, 6]
// // Output: [4, 16, 36]
// console.log(arr.map((number) => number ** 2));
// // Filter Unique Values:
// // Input: [1, 2, 2, 3, 4, 4, 5]
// // Output: [1, 2, 3, 4, 5]
// console.log([...new Set(arr)]);
// // Combine Arrays:
// // Input: ['a', 'b', 'c'], [1, 2, 3]
// // Output: ['a-1', 'b-2', 'c-3']
// console.log(word.map((word, i) => word + "-" + arr[i]));
