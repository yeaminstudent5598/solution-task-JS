// Task 01

const people = [
    { name: 'Yeamin Madbor', age: 23, gender: 'male'},
    { name : 'Sifat Hossain', age : 21, gender : 'male'},
    { name : 'Abul Kalam Sordar', age : 31, gender : 'male'},
    { name : 'Bithi Akter', age : 18, gender : 'female'},
    { name : 'Juthi Akter', age : 17, gender : 'female'},
    { name : 'Ahaliya Akter', age : 16, gender : 'female'}
]

const getMalesNames = (arr) => {
    return arr 
    .filter(person => person.gender !== "female")
    .map(person => person.name)
}

console.log("Males Names Without Females", getMalesNames(people))

// Task 2

const books = [
    { title : 'Learn With Yeamin', author : 'Yeamin Madbor', year : 2025},
    { title : "Nofser Biruddhe Lorai", author : "Mahmud Bin Noor", year : 2021},
    { title : 'React js Master', autho : "Billal Sir", year : 2022 }
]

const getNewArray = (arr) => arr.map(book => book.title);
console.log("Books Titles:", getNewArray(books))

// Task 4

const cars = [
    { make : 'Toyota', model : 'corolla', year: 2015},
    { make : ' Tesla', model : 'Model 3', year: 2022},
    { make : 'Honda', model : 'civic', year: 2018}
]

const sortingCarsByYear = (arr) => [...arr].sort((a, b) => a.year - b.year);

console.log("Sorted Cars:", sortingCarsByYear(cars))

const users = [
    { name : 'Yeamin', age: 23},
    { name : 'Billal', age: 32}
]

const updateAge = (arr, personName, newAge) => {
  return arr.map(person => 
    person.name === personName ? { ...person, age: newAge } : person
  );
};
console.log("Task 5 (Updated Age):", updateAge(users, "Yeamin", 22));


// --- Task 6: Array Reduction ---
// Task: Calculate the sum of all even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 8, 10];

const sumEvens = (arr) => {
  return arr.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
};
console.log("Task 6 (Sum of Evens):", sumEvens(numbers));


// --- Task 7: Leap Year Checker ---
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
console.log("Task 7 (Is 2024 Leap Year?):", isLeapYear(2024));


// --- Task 8: Unique Values ---
const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const getUniqueValues = (arr) => [...new Set(arr)];
console.log("Task 8 (Unique Values):", getUniqueValues(duplicateNumbers));
