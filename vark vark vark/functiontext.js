// let j = prompt("test");
// let cleaned = parseInt(j);
// let f = 10 - j;
// let sum = 0;
// while (f >= 0) {
//   f -= 1;
//   sum += cleaned;
//   cleaned += 1;
// }
// console.log(sum);

// function random(num) {
//   return Math.floor(Math.random() * num);
// }
// let randomnum = random(100);
// console.log(randomnum);
// let correct = 0;
// let answer = prompt("1-100, Pick." + randomnum);
// let cleaned = answer.match(/^[0-9]*$/);
// console.log(cleaned);
// while (correct === 0) {
//   if (cleaned == randomnum) {
//     window.alert("Correct!");
//     correct = 1;
//   } else if (cleaned > randomnum) {
//     window.alert("Lower.");
//     answer = prompt("1-100, Pick.");
//     cleaned = answer.match(/^[0-9]*$/);
//   } else if (cleaned < randomnum) {
//     window.alert("Higher.");
//     answer = prompt("1-100, Pick.");
//     cleaned = answer.match(/^[0-9]*$/);
//   } else {
//     console.log("Something went wrong.");
//   }
// }
// let test = prompt("enter a digit");
// let tester = prompt("how many");
// let tested = parseInt(tester) - 1;
// let testint = parseInt(test);
// while (tested >= 0) {
//   tested -= 1;
//   testint += 1;
//   test += testint;
// }
// console.log(test);
// let input = prompt("Hey how are you?");
// const upperLower = function (string) {
//   let newString = "",
//     newChar = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === " ") {
//       newChar = " ";
//     } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
//       newChar = string.charAt(i).toLowerCase();
//     } else {
//       newChar = string.charAt(i).toUpperCase();
//     }
//     newString += newChar;
//   }

//   return newString;
// };
// console.log(upperLower(input));
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 1;
// let output = 0;
// if (parsed === 1 || parsed === 0) {
//   alert("Wrong!");
// } else if (input > 1000) {
//   alert("nope!");
// } else if (output < 1000) {
//   while (output < 1000) {
//     output = parsed ** i;
//     i += 1;
//   }
// } else {
//   ("Nope");
// }
// let hotfix = i - 1;
// window.alert(
//   input + "'s power of " + hotfix + " is larger then 1000: " + output
// );
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 1;
// let output = 0;
// if (parsed === 0) {
//   alert("Wrong!");
// } else if (parsed % 2 == 0) {
// window.alert("Nope!")
// } else if (parsed > 0) {
//   while (parsed > 0) {
//     parsed = parsed - i;
//     console.log(parsed);
//     if (parsed % 2 == 0) {
//       console.log("Output is currently " + output);
//       console.log(parsed + "Has been added");
//       output += parsed;
//     }
//   }
// }
// window.alert(output);
// let input = prompt("Number");
// let parsed = parseInt(input);
// let i = 0;
// let output = "";
// while (parsed > 0) {
//   output += "*";
//   parsed -= 1;
//   console.log(output);
// }
// function largest(arr) {
//   let i;
//   let max = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// let arr = [1, 2, 3, 10];
// let biggestremoved = arr.filter((biggest) => biggest !== largest(arr));
// let difference = largest(arr) - largest(biggestremoved);
// console.log(largest(arr) + " and the difference is " + difference);
// let input = window.prompt("Number");
// let arr = input.split("");
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       var temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);
// let arr = [3, 4, 5];
// let max = 0;
// for (i = 0; i < arr.length; i++) {
//   max += parseInt(arr[i]);
// }
// console.log(max);
// let arr = [4, 6];
// let max = arr[0] * arr[1];
// let fax = (arr[0] + arr[1]) * 2;
// console.log(max + " " + fax);
// let arr = [1];
// let y = arr[0] * 3 - 5;
// console.log(y);
//y=4x2-3x+5
// let arr = -2;
// let y = arr ** 2 * 4 - arr * 3 + 5;
// console.log(y);
// let arr = 321;
// let arr2 = String(arr);
// let arr3 = arr2.split("");
// let max = parseInt(arr2[1]);
// console.log(max);
// let arr = 22;
// if (arr.toString().length === 2 && arr !== isNaN) {
//   console.log(arr / 2);
// } else {
//   console.log("fake");
// }
// let arr = 222;
// let arr2 = arr.toString();
// let arr3 = arr2.split("");
// let output = 0;
// if (arr.toString().length === 3 && arr !== isNaN) {
//   for (i = 0; i < arr3.length; i++) {
//     output += parseInt(arr3[i]);
//   }
//   console.log(output);
// } else {
//   console.log("fake");
// }
// let min = 200;
// let hour = 0;
// while (min > 60) {
//   min -= 60;
//   hour += 1;
// }
// console.log(hour + " " + min);
// let sec = 3612;
// let min = 0;
// let hour = 0;
// while (sec >= 60) {
//   sec -= 60;
//   min += 1;
// }
// if (min >= 60) {
//   while (min >= 60) {
//     min -= 60;
//     hour += 1;
//   }
// }
// console.log(hour + " " + min + " " + sec);
// let time = [3, 4];
// let secs = 0;
// while (time[0] > 0) {
//   time[0] -= 1;
//   secs += 60;
// }
// console.log(secs + time[1]);
// let time = [1, 2, 3];
// let secs = 0;
// while (time[0] > 0) {
//   time[0] -= 1;
//   secs += 3600;
// }
// while (time[1] > 0) {
//   time[1] -= 1;
//   secs += 60;
// }
// console.log(secs + time[2]);
// let hour = 44;
// let day = 0;
// while (hour > 24) {
//   hour -= 24;
//   day += 1;
// }
// console.log(day + " " + hour);
// let time = [2, 5];
// while (time[0] > 0) {
//   time[0] -= 1;
//   time[1] += 24;
// }
// console.log(time[1]);
// let month = 27;
// let year = 0;
// while (month > 12) {
//   month -= 12;
//   year += 1;
// }
// console.log(year + " " + month);
// let month = 7;
// let year = 2;
// while (year > 0) {
//   year -= 1;
//   month += 12;
// }
// console.log(month);
// let arr = [33, 3];
// if (arr[0] > arr[1]) {
//   console.log(arr[0]);
// } else {
//   console.log(arr[1]);
// }
// let arr = [33, 3];
// if (arr[0] < arr[1]) {
//   console.log(arr[0]);
// } else {
//   console.log(arr[1]);
// }
// let arr = [33, 333, 2131];
// if (arr[0] > arr[1] && arr[0] > arr[2]) {
//   console.log(arr[0]);
// } else if (arr[1] > arr[2]) {
//   console.log(arr[1]);
// } else {
//   console.log(arr[2]);
// }
// let arr = [33, 333, 2131, 1];
// if (arr[0] < arr[1] && arr[0] < arr[2] && arr[0] < arr[3]) {
//   console.log(arr[0]);
// } else if (arr[1] < arr[2] && arr[1] < arr[3]) {
//   console.log(arr[1]);
// } else if (arr[2] < arr[3]) {
//   console.log(arr[2]);
// } else {
//   console.log(arr[3]);
// }
// let arr = [85, 75, 96, 69];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] >= 80) {
//     output += parseInt(arr[i]);
//   }
// }
// console.log(output);
// let arr = [3, 6, 2, 4];
// let multiplyarr = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) {
//     multiplyarr += parseInt(arr[i]);
//   }
// }
// let parsed = multiplyarr.split("");
// console.log(parsed);
// let output = parsed[0];
// for (i = 1; i < parsed.length; i++) {
//   if (parsed[i] < 5) {
//     output *= parseInt(parsed[i]);
//   }
// }
// console.log(output);
// let arr = [10, 3, 5];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     output += parseInt(arr[i]);
//   }
// }
// console.log(output);
// let arr = [5, 2, 3];
// let output = 0;
// let i = 0;
// while (output % 2 == 0 && output === 0) {
//   output = arr[i];
//   arr.splice(i, 1);
//   i++;
// }
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     output *= arr[i];
//   }
// }
// console.log(output);
// let arr = [2, 5, 5];
// let output = "";
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 5) {
//     output += arr[i];
//   }
// }
// console.log(output.length);
// let arr = [3, 12, 8, 9];
// let output = [];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 == 0) {
//     output.push(arr[i]);
//   }
// }
// console.log(output.length);
// let arr = [7, 22, 13, 30];
// let output = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 11 !== 0) {
//     output += arr[i];
//   }
// }
// console.log(output);
// let num = 9;
// let answer = num >= 11 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 9;
// let answer = num > 5 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 9;
// let answer = num % 2 == 0 ? console.log("YES") : console.log("NO!");
// console.log(answer);
// let num = 4;
// let answer =
//   num > 3 && num < 6 ? console.log("Success") : console.log("Failure!");
// console.log(answer);
// let num = 3;
// switch (num) {
//   case 2:
//     console.log("Bad");
//     break;
//   case 3:
//     console.log("Decent");
//     break;
//   case 4:
//     console.log("Good");
//     break;
//   case 5:
//     console.log("Perfect");
//     break;
//   default:
//     console.log("Fuck you");
//     break;
// }
// let num = 88;
// if (num >= 89) {
//   console.log("A");
// } else if (num >= 79) {
//   console.log("B");
// } else if (num >= 69) {
//   console.log("C");
// } else if (num >= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }
// console.log("IOI");
// for (i = 0; i < 3; i++) {
//   console.log("IOI");
// }
// let num = prompt("number");
// for (i = 0; i < parseInt(num); i++) {
//   console.log("IOI");
// }
// let num = prompt("number");
// let output = parseInt(num) + parseInt(num) * 2;
// console.log(output);
// let num = prompt("number");
// let parsed = parseInt(num);
// let result = parsed;
// while (parsed > 1) {
//   parsed--;
//   result *= parsed;
// }
// console.log(result);
// let num = 6;
// let hundreds = num * 100;
// console.log(hundreds);
// let num = prompt("What number");
// let add = prompt("How many times");
// let real = parseInt(num) * parseInt(add);
// console.log(real);
// let num = prompt("2 to the power of what?");
// let real = 2 ** parseInt(num);
// console.log(real);
// let num = prompt("Initial Number?");
// let number = prompt("To the power of?");
// let real = parseInt(num) ** parseInt(number);
// console.log(real);
// let num = prompt("Day");
// let parse = parseInt(num);
// switch (parse) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }
// let num = prompt("month");
// let parse = parseInt(num);
// switch (parse) {
//   case 1:
//   case 2:
//     console.log("Spring");
//     break;
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     console.log("Summer");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Autumn");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("Winter");
//     break;
// }
// let num = prompt("Number");
// let secondaryw = prompt("up to the power of");
// if (parseInt(num) <= 10 && parseInt(secondaryw) <= 10) {
//   for (i = 1; i < parseInt(secondaryw) + 1; i++) {
//     console.log(parseInt(num) + "^" + i + "=" + parseInt(num) ** i);
//   }
// } else {
//   console.log("Fake");
// }
// let num = parseInt(prompt("how many floors :"));
// let num2 = parseInt(prompt("how many doors per floor :"));
// let num3 = parseInt(prompt("which door:"));
// num3 = num3 - 1;
// num = Math.floor(num3 / num2) + 1;
// num2 = (num3 % num2) + 1;
// console.log(num + " " + num2);
// const str = "Bayn Baile"; //B. Dorj
// function Name(str) {
//   let split = str.split(" ");
//   let answer = String(split[0]).charAt(0).toUpperCase();
//   let answer2 = String(split[1]).charAt(0).toUpperCase();
//   let last = split[1].split("");
//   last[0] = answer2;
//   let realanswer = last.join("");
//   console.log(answer + ". " + realanswer);
// }
// Name(str);
const animals = [
  { type: "dog", sound: "woof" },
  { type: "cow", sound: "moo" },
  { type: "cat", sound: "meow" },
];
function animalsound(animal) {
  for (i = 0; i < animals.length; i++) {
    if (animals[i].type === animal) {
      console.log("The " + animal + " goes " + animals[i].sound);
    }
  }
}
let ask = prompt("Pick an animal, dog, cat, cow");
animalsound(ask);
let classmates = [
  {
    name: "Conscript",
    DOB: 2001,
    single: true,
  },
  {
    name: "Ramzan Kadyrov",
    DOB: 1983,
    single: false,
  },
  {
    name: "Vladmir Vladmirovich Putin",
    DOB: 1975,
    single: false,
  },
  {
    name: "Ivan, The alcholic",
    DOB: 2012,
    single: true,
  },
  {
    name: "SU-25 Pilot",
    DOB: 1999,
    single: true,
  },
];
let singles = "";
let over20 = " ";
for (i = 0; i < classmates.length; i++) {
  if (classmates[i].single === true) {
    singles += " " + classmates[i].name + "";
  }
  if (classmates[i].DOB <= 2003) {
    over20 += "" + classmates[i].name + " ";
  }
}
console.log(
  "These people are single:" +
    singles +
    ", And In your class these people are aged over 20: " +
    over20
);
