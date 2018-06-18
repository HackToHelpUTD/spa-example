function getRepos(username) {
  var request = new XMLHttpRequest();

  request.open("GET", "https://api.github.com/users/" + username + "/repos");
  request.send();

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      var container = document.getElementsByClassName("container")[0];
      removeAllChildren(container);
      var response_obj = JSON.parse(request.responseText);
      populateRepos(response_obj);
    }
  };
}

function removeAllChildren(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
}

function populateRepos(repos_array) {
  var repos_div = document.createElement("div");
  repos_div.classList.add("row")

  for (var i = 0; i < repos_array.length; i++) {
    var div = document.createElement("div");
    var card = document.createElement("div");
    var card_title = document.createElement("h1");

    div.classList.add("col-md-4", "col-12");
    card.classList.add("card");
    card_title.classList.add("card-title");

    card_title.innerHTML = repos_array[i].name;

    card.appendChild(card_title);
    div.appendChild(card);
    repos_div.appendChild(div);
    console.log(repos_div);
  }

  console.log(repos_div);
  var container = document.getElementsByClassName("container")[0];
  container.appendChild(repos_div);
}