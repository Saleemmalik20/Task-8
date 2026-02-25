let input = document.querySelector("#value");
let button = document.querySelector("#bttn");
let list = document.querySelector("#taskList");



//Event Handling
button.addEventListener("click", function () {
  // Prevent empty task
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Dynamic Element Creation
  let li = document.createElement("li");
  li.innerText = input.value;


  // Styling using style.property
  li.style.backgroundColor = "#58c4df";
  li.style.border = "1px solid black";
  li.style.borderRadius = "20px";
  li.style.fontSize= "20px";
  li.style.textalign ="justify";
  li.style.padding = "10px";
  li.style.margin = "10px";

  

  // Add class using setAttribute
  li.setAttribute("class", "task-item");

  // Append
  list.append(li);

  // Remove task when clicked
  li.addEventListener("click", function () {
    li.remove();
  });

  // 5.Clear input field
  input.value = "";
});
