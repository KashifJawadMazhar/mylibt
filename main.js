const { add, subtract, multiply, divide } = require("./mylib");

console.log("=== mylib Demo ===");
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 4 =", divide(20, 4));

// Testing ZeroDivision error
try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Error caught:", err.message);
}