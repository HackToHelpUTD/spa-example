document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  var row_1 = document.createElement("div");
  var row_2 = document.createElement("div");
  var div = document.createElement("div");
  var title_div = document.createElement("div");
  var title = document.createElement("h1");
  var form_div = document.createElement("div");
  var label = document.createElement("label");
  var input = document.createElement("input");
  var button = document.createElement("button");

  row_1.classList.add("row");
  row_2.classList.add("row", "title");
  div.classList.add("col-12", "github-info");

  title_div.classList.add("col-12", "text-center");

  title.innerHTML = "GitHub Repository Lister";
  
  label.innerHTML = "GitHub Username";
  label.for = "username";

  input.id = "username";
  input.placeholder = "Username";
  input.classList.add("form-control");

  button.classList.add("btn", "btn-success");
  button.type = "submit";
  button.innerHTML = "Let's Go!";
  button.addEventListener("click", function() {
    var username = input.value;
    getRepos(username);
  });

  title_div.appendChild(title);
  row_2.appendChild(title_div);

  form_div.classList.add("form-group");
  form_div.appendChild(label);
  form_div.appendChild(input);
  form_div.appendChild(button);

  div.appendChild(form_div);
  row_1.appendChild(div);

  var container = document.getElementsByClassName("container")[0];
  container.appendChild(row_2);
  container.appendChild(row_1);
}