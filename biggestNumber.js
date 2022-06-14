const maxRedigit = (value) => {
  let arr = Array.from(String(value), Number);

  if (typeof value === "number" && value > 0 && arr.length === 3) {
    const sorted = arr.sort((a, b) => b - a);
    const arrOfString = sorted.map(String);
    const string = arrOfString.join("");

    return string;
  } else return null;
};

console.log("123 ->", maxRedigit(123));
console.log("231 ->", maxRedigit(231));
console.log("321 ->", maxRedigit(321));
console.log("-1 ->", maxRedigit(-1));
console.log("0 ->", maxRedigit(0));
console.log("99 ->", maxRedigit(99));
console.log("1000 ->", maxRedigit(1000));
