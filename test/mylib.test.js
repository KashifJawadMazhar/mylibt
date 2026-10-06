const { expect } = require("chai");

const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib - Arithmetic Operations", function () {
  
  // this will run only a time before testing
  before(function () {
    console.log(">>> Starting mylib test suite...");
  });

  // this will run only a time after testing
  after(function () {
    console.log(">>> mylib test suite completed.");
  });

  // Test 1: Addition
  it("should add two numbers correctly", function () {
    expect(add(5, 3)).to.equal(8);
    expect(add(-1, 1)).to.equal(0);
  });

  // Test 2: Subtraction
  it("should subtract two numbers correctly", function () {
    expect(subtract(10, 4)).to.equal(6);
    expect(subtract(3, 8)).to.equal(-5);
  });

  // Test 3: Multiplication
  it("should multiply two numbers correctly", function () {
    expect(multiply(4, 5)).to.equal(20);
    expect(multiply(-3, 3)).to.equal(-9);
  });

  // Test 4: Division
  it("should divide two numbers correctly", function () {
    expect(divide(20, 4)).to.equal(5);
    expect(divide(9, 2)).to.equal(4.5);
  });

  // Test 5: ZeroDivision Error Check
  it("should throw ZeroDivision error when dividing by zero", function () {
    // Yeh check karta hai ke 0 se divide karne par error aata hai
    expect(() => divide(10, 0)).to.throw("ZeroDivision");
  });

  // Test 6: Input validation check
  it("should throw error if inputs are not numbers", function () {
    expect(() => add("5", 3)).to.throw("Inputs must be numbers");
    expect(() => multiply(null, 2)).to.throw("Inputs must be numbers");
  });
});