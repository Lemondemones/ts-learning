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
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
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
