function negate(a) {
  return !+a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !a && !b;
};

function one(a, b) {
  return !a == b;
};

function truthiness(a) {
  return a? true : false;
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 == 1;
};

function isEven(a) {
  return a % 2 == !1;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return char === string.charAt(0);
};

function containsVowels(string) {
  return string.match('[aeiouAEIOU]') !== null;
};

function isLowerCase(string) {
  return string.includes("A") == false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
