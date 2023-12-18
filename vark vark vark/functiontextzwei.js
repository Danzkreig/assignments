let j = 0;
function addelement() {
  body = document.createElement("div");
  content = document.createTextNode(j);
  body.style.cssText = "width: 100px; height: 100px; background-color: red;";
  body.appendChild(content);
  document.getElementById("boss").appendChild(body);
  j++;
}
for (i = 0; i <= 12; i++) {
  addelement();
}
function changecolor() {
  change = document.getElementById("boss");
  boss.style.cssText = "background-color: green";
}
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var input = document.getElementById("input");
function check() {
  if (parseInt(num1.innerText) + parseInt(num2.innerText) == input.value) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
}
console.log(num1.innerText);
function newProblem() {
  random1 = Math.round(Math.random() * (100 - 1) + 1);
  random2 = Math.round(Math.random() * (100 - 1) + 1);
  num1.innerText = random1;
  num2.innerText = random2;
}
var text = document.getElementById("change");
var color = document.getElementById("color");
function change() {
  text.innerText = "Hello Nobody";
  color.style = "background-color:red;";
}
