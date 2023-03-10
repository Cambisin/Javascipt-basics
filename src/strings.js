function sayHello (string) {
  return ('Hello, world!');
};

function uppercase (string) {
  return string.toUpperCase();
};

function lowercase (string) {
  return string.toLowerCase();
};

function countCharacters (string) {
  return string.charAt();
};

function firstCharacter (string) {
  return string.charAt(0);
};

function firstCharacters (string, n) {
  return string.substring(0, 4);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
