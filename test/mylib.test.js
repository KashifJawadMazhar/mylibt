const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../mylib");

describe("mylib - Arithmetic Operations", function () {

  // Runs once before all tests
  before(function () {
    console.log("Starting mylib test suite...");
  });

  // Runs once after all tests
  after(function () {
    console.log("mylib test suite completed.");
  });

  it("should add two numbers correctly", function () {
    expect(add(5, 3)).to.equal(8);
    expect(add(-2, 7)).to.equal(5);
  });

  it("should subtract two numbers correctly", function () {
    expect(subtract(10, 4)).to.equal(6);
    expect(subtract(3, 8)).to.equal(-5);
  });

  it("should multiply two numbers correctly", function () {
    expect(multiply(4, 5)).to.equal(20);
    expect(multiply(-3, 3)).to.equal(-9);
  });

  it("should divide two numbers correctly", function () {
    expect(divide(20, 4)).to.equal(5);
    expect(divide(9, 2)).to.equal(4.5);
  });

  it("should throw ZeroDivision error when dividing by zero", function () {
    expect(() => divide(10, 0)).to.throw("ZeroDivision");
  });

  it("should throw error if inputs are not numbers", function () {
    expect(() => add("5", 3)).to.throw("Inputs must be numbers");
    expect(() => multiply(null, 2)).to.throw("Inputs must be numbers");
  });
});