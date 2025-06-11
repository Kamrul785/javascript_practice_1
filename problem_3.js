
const array = [40, 5, 9, 100, 15, 4, 23, 8, 16, 42, 7, 3, 2, 1, 6, 10, 11, 12, 13, 14];

array.sort(function(a,b){return a - b});

console.log("\nSorted array:" , ...array);