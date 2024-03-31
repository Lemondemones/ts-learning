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

// Challenge Excess Property Checks
function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): string | number {
    if (typeof input === "number") {
        return Math.pow(input, 2);
    } else {
        return config.reverse ? input.toUpperCase().split("").reverse().join("") : input.toUpperCase();
    }
}
//Challenge Type Alias
type Employee = {
    id: number;
    name: string;
    department: string;
};

type Manager = {
    id: number;
    name: string;
    employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
    if ("employees" in staff) {
        console.log(`${staff.name} is a manager of ${staff.employees.length} employees.`);
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department} department.`);
    }
}

const alice: Employee = { id: 1, name: "Alice", department: "IT" };
const steve: Employee = { id: 1, name: "Steve", department: "HR" };

const bob: Manager = { id: 2, name: "Bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

//Challenge Interface
interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(increase: number): number;
}

const laptop: Computer = {
    id: 1,
    brand: "HP",
    ram: 20,
    upgradeRam(amount: number) {
        this.ram += amount;
        return this.ram;
    },
};

laptop.storage = 256;

console.log(laptop.upgradeRam(10));
console.log(laptop);

//Challenge Merging, Extend, TypeGuard Part 1

interface Person {
    name: string;
}
interface DogOwner extends Person {
    dogName: string;
}

interface ManagerI extends Person {
    managePeople(): void;
    delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | ManagerI {
    const random = Math.random();

    if (random < 0.33) {
        return {
            name: "izek",
        };
    } else if (random < 0.66) {
        return {
            name: "sarah",
            dogName: "rax",
        };
    } else {
        return {
            name: "bob",
            managePeople() {
                console.log("managing people..");
            },
            delegateTasks() {
                console.log("delegate task...");
            },
        };
    }
}

const employeeI: Person | DogOwner | ManagerI = getEmployee();

function isManager(obj: Person | DogOwner | ManagerI): obj is ManagerI {
    return "managePeople" in obj;
}

if (isManager(employeeI)) {
    employeeI.delegateTasks();
}

// Challenge Tuples and Enums
enum UserRole {
    Admin,
    Manager,
    Employee,
}

type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
};

function createUser(user: User): User {
    return user;
}

const user: User = createUser({
    id: 1,
    name: "Jhon",
    role: UserRole.Admin,
    contact: ["email@", "2313445"],
});

console.log(user);

// Challenge type guard

type ValueType = string | number | boolean;
let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): string {
    if (typeof value === "string") {
        return value.toLowerCase();
    } else if (typeof value === "number") {
        return value.toFixed(2);
    } else {
        return `boolean ${value}`;
    }
}

console.log(checkValue(value));

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal): void {
    if (animal.type === "dog") {
        animal.bark();
    } else {
        animal.meow();
    }
}

type myLength = string | null | undefined;

function printLength(str: myLength) {
    if (str) {
        console.log(str.length);
    } else {
        console.log("No str provided");
    }
}

printLength("hello");
printLength(null);

try {
    function checkInput(input: Date | string): string {
        if (input instanceof Date) {
            return input.getFullYear().toString();
        }
        return input;
    }
    const year = checkInput(new Date());
    const random = checkInput("2020-05-05");
    console.log(year);
    console.log(random);
    throw new Error("This is an error");
} catch (error) {
    if (error instanceof Error) {
        console.log("Caught an Error object: " + error.message);
    } else {
        console.log("Caught an unknown error");
    }
}

// Challenge - Discriminated Unions and exhaustive check using the never type
type IncrementAction = {
    type: "increment";
    amount: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: "decrement";
    amount: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "increment":
            return state + action.amount;
        case "decrement":
            return state - action.amount;
        default:
            const unexpectedAction: never = action;
            throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
}

const newState = reducer(15, {
    user: "john",
    type: "increment",
    amount: 5,
    timestamp: 123456,
});
