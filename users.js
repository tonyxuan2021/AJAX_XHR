document.getElementById("button1").addEventListener("click", loadUser);

function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let user = JSON.parse(this.responseText);
      console.log(user.name);

      let output = "";

      output += "<ul>" + "<li>ID: " + user.name + "</li>";
      document.getElementById("user").innerHTML = output;
    }
  };

  xhr.send();
}
