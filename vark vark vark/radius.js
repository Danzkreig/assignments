let year = 2012;
if (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap");
} else {
  console.log("Not Leap");
}
let n1 = 1;
let n2 = 3;
let n3 = 6;
let n4 = 33;
let small = Math.min(n1, n2, n3, n4);
console.log(small);

// team average
let red1 = 96;
let red2 = 108;
let red3 = 89;
let blu1 = 88;
let blu2 = 91;
let blu3 = 110;
let raverage = (red1 + red2 + red3) / 3;
let baverage = (blu1 + blu2 + blu3) / 3;
if (baverage > raverage) {
  console.log("Blue wins");
} else {
  console.log("Red Wins");
}
