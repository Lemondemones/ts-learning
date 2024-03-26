// Challenge 1

// 1. String
let myFlower: string = "naRcissuS";
myFlower = myFlower.toLowerCase();

// 2. Number
let distance: number = 5000;
distance = distance / 100;

// 3. Boolean
let isHuman: boolean = true;
isHuman = !isHuman;

console.log(myFlower, distance, isHuman);

// Challenge 2

// 1. Order Status
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

// 2. Discount
let discount: number | string = 20;
discount = "20";

console.log(discount, orderStatus);

// Challenge 3
let temperatures: number[] = [20, 14, 22];
let colors: string[] = ["red", "blue", "yellow"];
let mixedArray: (string | number)[] = [1, "red", "2"];

// Challenge Functions - Fundamentals
let names: string[] = ["Tom", "Jerry"];

function isNameInArray(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = "Tom";
if (isNameInArray(nameToCheck)) {
  console.log(`${nameToCheck} is in array`);
} else {
  console.log(`nothing`);
}
