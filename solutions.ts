
// Solution 1

function filterEvenNumbers(numbers: number[]) {
  return numbers.filter(num => num % 2 === 0);
}

// Solution 2

function reverseString(input: string) {
  return input.split('').reverse().join('');
};

// Solution 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// Solution 4

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
};

// Solution 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: !book.isRead
  };
};

// Solution 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
};

// Solution 7

function getIntersection(arr1: number[], arr2: number[]) {
  const arr3 = new Set(arr1);
  return arr2.filter(num => arr3.has(num));
};