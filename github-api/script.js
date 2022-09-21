let username = document.getElementById("username");
let button = document.getElementById("send");
let title = document.getElementById("title");
let img = document.getElementById("img");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repos = document.getElementById("repos");
let reposlist = document.getElementById("reposlist");

button.addEventListener("click", function () {

  let request = new XMLHttpRequest();
  request.open("GET", `https://api.github.com/users/${username.value}`, true);
  request.addEventListener("load", function () {
    let obj = JSON.parse(request.responseText);
    img.setAttribute("src", obj.avatar_url);
    img.setAttribute("style", "border: 2px solid rgb(116, 114, 114); height: 150px;")
    title.innerHTML = `${obj.name} <i>(@<span>${obj.login}</span>)</i>`;
    followers.innerHTML = "Followers: " + obj.followers;
    following.innerHTML = "Following: " + obj.following;
    repos.innerHTML = "Repos: " + obj.public_repos;
  });
  request.send();

  let reporequest = new XMLHttpRequest();
  reporequest.open("GET", `https://api.github.com/users/${username.value}/repos`, true);
  reposlist.innerHTML = `<p id="rlisttext">Repos List: </p>`;
  reporequest.addEventListener("load", function () {
    let obj = JSON.parse(reporequest.responseText);
    obj.forEach(function (repo) {
      let div = document.createElement("div");
      div.innerHTML = repo.name;
      reposlist.appendChild(div);
    });
  });
  reporequest.send();

});