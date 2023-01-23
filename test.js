export const sum = (a, b) => {
  return a + b;
};

console.log("Hello");

let a = 1;
let b = 2;

let result1 = sum(a, b);
console.log(result1);

// swap
const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return [a, b, b, a];
};

let result = swap(a, b);
console.log(result);

console.log(a);
console.log(b);

a = 2;

console.log(a, "a has be modifed");

const array = [
  "apple",
  "banana",
  "grape",
  "cantalope",
  "pineapple",
  "oranges",
  "dragonfruit",
];

const [x, y, z] = array;
console.log(x, y, z);

const fruits = { apple: 900, banana: 100, oranges: 100 };

const { apple, banana, oranges } = fruits;

console.log(apple, banana, oranges);

const copyFruits = { ...fruits, dragonfruit: 99 };

console.log(copyFruits, "this is the copy");

// switch case
// do while
// recursion
// rest operator
// nested objects
// while loop
// try catch
// handling errors client side or server side
//

let number = 0;

let day = undefined;
switch (number) {
  case 0:
    day = "monday";
    break;
  case 1:
    day = "tuesday";
    break;
  case 2:
    day = "wednesday";
    break;
  default:
    day = "saturday";
}

console.log(day);

//  If you omit the break statement,
//  the next case will be executed even if the evaluation does not match the case.

let counter = "counter";

do {
  console.log(counter);
} while (counter.length >= 10);

console.log(counter, "the current count");

const func = (a) => {
  if (a === 1) {
    return "hello";
  }
};
try {
  func(0);
} catch (error) {
  console.log(error);
}

try {
  nonNonFunc();
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Jermey has stuff to do!");
  }
}

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;

const obj = { salmon: [100, 1000] };
const { [a]: salmon } = obj;

const sushi = {
  salmon: ["toro", "chu-toro", "o-toro"],
  tuna: 100,
  halibut: 1000,
};

console.log(sushi);

const [ay, ax, az] = sushi.salmon;

console.log(ay, ax, az);

// const nodeVersion = process.version;

// console.log(nodeVersion); // Outputs the current version of Node.js, e.g. "v12.16.3"

// const test = [1, 90, 40, 1000, 10];
// const anotherTest = [];
// console.log(Math.max(...test, 100000));

// console.log(test.find((el) => el === 90));
// // it is a callback function
// // iterates through the array until it finds an matching el otherwise returns false

// test.forEach((el) => anotherTest.push(el * 10));
// // always returns undefined
// // a function to execute for each elemtn in the array.

// console.log(anotherTest, "***");

// console.log(test);

// console.log(test.filter((el, index) => el >= 1000 && index === 3));
// // filter(function (element, index, array) { /* … */ })
// // The filter() method creates a shallow copy of a portion of a given array, filtered down to
// //just the elements from the given array that pass the test implemented by the provided function.

// const x = anotherTest.map((el, idx) => {
//   el * el;
// });
// // The map() method creates a new array populated with the results of calling a
// // provided function on every element in the calling array.

// console.log(x);

// import { sum } from "./sum";

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum.add(1, 2).toBe(3));
// });
