let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 30,
    gender: "male",
  },
  {
    name: "Индра",
    age: 30,
    gender: "female",
  },
  {
    name: "Хатнаа",
    age: 30,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 20,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 20,
    gender: "female",
  },
];
function MorF(arr) {
  let males = [];
  let females = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male") {
      males += arr[i].name + ",";
    } else {
      females += arr[i].name + ",";
    }
  }
  return males + ". The females are as follows: " + females;
}
function mediumage(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    num += arr[i].age;
  }
  return Math.round(num / arr.length);
}
function addLastName(arr) {
  let kanji = [];
  Object.assign(kanji, arr);
  for (i = 0; i < arr.length; i++) {
    kanji[i].LastName = "Hinkleheimer";
  }
  return kanji;
}
function sameAge(arr) {
  output = [];
  for (i = 0; i < arr.length; i++) {
    test = arr[i];
    output.push(arr.filter((x) => x.age === test.age));
    arr.splice(i, 2);
  }
  return output;
}
console.log(sameAge(students));
