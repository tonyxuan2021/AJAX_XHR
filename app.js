document.querySelector("#button").addEventListener("click", loadText);

function loadText() {
  // create XHR Object
  let xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  xhr.open("GET", "sample.txt", true);

  // optional - used for loaders
  //   xhr.onprogress = function () {};

  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
      document.getElementById("text").innerHTML = this.responseText;
    } else if ((this.status = 404)) {
      document.getElementById("text").innerHTML = "not found";
    }
  };

  xhr.onerror = function () {
    console.log("request error");
  };
  //   xhr.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  // Sends request
  xhr.send();
}

// readystate values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
