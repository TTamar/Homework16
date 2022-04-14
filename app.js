//1.
function OddorEven(a) {
  return a % 2 === 0;
}
let k = OddorEven(200);
console.log(k);

//2.

function Areasize(side_a, side_b) {
  return side_a * side_b;
}
let j = Areasize(10, 5);

console.log(j);

//3.

let SquareArea = (squeare_side) => {
  return Areasize(squeare_side, squeare_side);
};
console.log(SquareArea(3));

//4.

function RendomNum(number) {
  for (let number = 0; number < 100; number++) {
    return Math.random(number);
  }
}

// let RendomNumber = RendomNum(30)
// console.log(RendomNumber);

//5.
let userArr = [
  {
    Name: "mariami",
    Age: 40,
  },
  {
    Name: "lali",
    Age: 18,
  },
  {
    Name: "maka",
    Age: 33,
  },
  {
    Name: "nino",
    Age: 21,
  },
  {
    Name: "eka",
    Age: 28,
  },
];

userArr.forEach((el) => {
  return;
});

//6.
function getCurrencySymbolFromCode(code) {
  if (code == "USD") {
    return "$";
  } else if (code == "EUR") {
    return "€";
  } else if (code == "GEL") {
    return "₾";
  } else {
    return "this code is not available";
  }
}
let Currency = getCurrencySymbolFromCode("GEL");
console.log(Currency);

