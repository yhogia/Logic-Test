const alternateCase = (letter) => {
  let arrOfLetter = letter.split("");
  let result = "";

  arrOfLetter.map((word) => {
    if (word.toUpperCase() === word) {
      result += word.toLowerCase();
    } else {
      result += word.toUpperCase();
    }
  });

  return result;
};

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
