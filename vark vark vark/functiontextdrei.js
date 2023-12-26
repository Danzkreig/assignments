// defining dom elements
const addcard = document.getElementsByClassName("addcard");
const backdrop = document.getElementById("backdrop");
const title = document.getElementById("title");
const todo = document.getElementsByClassName("todo");
const desc = document.getElementById("description");
const progress = document.getElementById("status");
const priority = document.getElementById("priority");
const submit = document.getElementById("submit");
// makes add card buttons work to show the task creation form
for (var i = 0; i < addcard.length; i++) {
  addcard[i].addEventListener("click", (event) => {
    backdrop.classList.add("ontop");
  });
}
//uid is literally just an incrimental number
var uid = 1;
// delete button function
function farter(id) {
  target = document.getElementById(id);
  target.remove("");
}
// done button function
function doner(id) {
  let done = document.getElementById("done");
  doneparent = done.parentNode;
  target = document.getElementById(id);
  doneparent.insertBefore(target, done);
}
// close form if clicked outside of bounding box
document.addEventListener("click", (event) => {
  if (
    event.target === backdrop ||
    event.target.classList.contains("close-modal")
  ) {
    backdrop.classList.remove("ontop");
  }
});
// used the form data to create task
submit.addEventListener("click", (event) => {
  let todo = document.getElementById("todo");
  let stuck = document.getElementById("stuck");
  let done = document.getElementById("done");
  let progressid = document.getElementById("progressid");
  let parentDiv = todo.parentNode;
  let task = document.createElement("div");
  let fart = document.createElement("button");
  let titleel = document.createElement("h4");
  let donebutton = document.createElement("button");
  donebutton.innerHTML = "Done";
  donebutton.setAttribute("onclick", "doner(" + uid + ")");
  let priorityel = document.createElement("div");
  let descel = document.createElement("p");
  let farttext = document.createTextNode("X");
  task.classList.add("taskcontainer");
  task.setAttribute("draggable", "true");
  fart.setAttribute("onclick", "farter(" + uid + ")");
  task.setAttribute("ondragstart", "drag(event)");
  task.id = uid;
  fart.appendChild(farttext);
  let taskname = document.createTextNode(title.value);
  let taskdesc = document.createTextNode(desc.value);
  let taskpriority = document.createTextNode(priority.value);
  task.appendChild(donebutton);
  priorityel.appendChild(taskpriority);
  descel.appendChild(taskdesc);
  titleel.appendChild(taskname);
  task.appendChild(titleel);
  task.appendChild(descel);
  task.appendChild(priorityel);
  task.appendChild(fart);
  if (progress.value === "todo") {
    parentDiv.insertBefore(task, todo);
  } else if (progress.value === "inprogress") {
    progressparent = progressid.parentNode;
    progressparent.insertBefore(task, progressid);
  } else if (progress.value === "stuck") {
    stuckparent = stuck.parentNode;
    stuckparent.insertBefore(task, stuck);
  } else if (progress.value === "done") {
    doneparent = done.parentNode;
    doneparent.insertBefore(task, done);
  }
  uid++;
  backdrop.classList.remove("ontop");
});
// drag'n'drop
const card = document.getElementsByClassName("card");
const fallschrimjager = document.getElementsByClassName("bigboy");
for (var i = 0; i < fallschrimjager.length; i++) {
  fallschrimjager[i].addEventListener("dragenter", (event) => {
    event.preventDefault();
  });

  fallschrimjager[i].addEventListener("dragover", (event) => {
    event.preventDefault();
  });
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.currentTarget.id);
}
function drop(ev) {
  var data = ev.dataTransfer.getData("text");
  ev.currentTarget.appendChild(document.getElementById(data));
}
function allowDrop(ev) {
  if (ev.target.classList == "bigboy") ev.preventDefault();
}
