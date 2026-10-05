/**
 * mylib - Basic arithmetic operations module
 */

/**
 * Adds two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  return a * b;
}

/**
 * Divides two numbers. Throws error on division by zero.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 * @throws {Error} if b is 0
 */
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
  if (b === 0) {
    throw new Error("ZeroDivision");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };