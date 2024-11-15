// Task 2: Calculate total sum and average of an array
function calculateSumAndAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    console.log("total : " + total + "average : " +average);
}

// Example of Task 2:
const numbers = [10, 20, 30, 40];
console.log(calculateSumAndAverage(numbers)); // { total: 100, average: 25 }

// Task 3: Remove duplicates from an array
function removeDuplicates(strings) {
    return [...new Set(strings)]; // the set make an array contain unique only and then i take cope
}

// Example task 3:
const strings = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(strings)); // the resukt [ "apple", "banana", "orange" ]
