//Task 1:
const numbers=[1,2,3,4,5]
console.log(numbers);

//Task 2:
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

//Task 3:
numbers.push(6);
console.log(numbers);

//Task 4
numbers.pop();
console.log(numbers);

//Task 5
numbers.shift();
console.log(numbers);

//Task 6
numbers.unshift(999);
console.log(numbers);

//Task 7
const arr=[];
numbers.map((value)=>{
    return arr.push(value*2);
})
console.log(arr);

//Task 8
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenByFilter = []

value.filter( (num) =>{
    if (num%2 === 0) {
        return evenByFilter.push(num)
    }
})
console.log(evenByFilter);

//Task 9
const sumOfValue = value.reduce((acc, currVal) => {
    return acc + currVal
}, 0)
console.log(sumOfValue);

//Task 10
for (let i = 0; i < value.length; i++) {
    const result = value[i];
    console.log(result);
}

//Task 11
value.forEach((num) => {
    console.log(num);
})

//Task 12
const multiArray = [
    ['Sachin', 21, 6644],
    ['Virat', 20, 1444],
    ['Dhoni', 25, 2501]
]
console.log(multiArray);

//Task 13
console.log(multiArray[1][0]);