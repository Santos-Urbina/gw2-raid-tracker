const accountDataButton = document.querySelector("#accountButton");
const accountDataText = document.querySelector("#accountDataText");
const raidDataButton = document.querySelector("#raidsButton");
const raidDataText = document.querySelector("#raidDataText");

accountDataButton.addEventListener("click", (e) => {
  e.preventDefault();

  accountDataText.textContent = "Loading...";

  fetch("/account").then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("404");
      } else {
        console.log("200");

        if (raidDataText.textContent !== "") {
          raidDataText.textContent = "";
        }

        accountDataText.textContent = JSON.stringify(data, undefined, 2);
      }
    });
  });
});

raidDataButton.addEventListener("click", (e) => {
  e.preventDefault();

  raidDataText.textContent = "Loading...";

  fetch("/raids").then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("404");
      } else {
        console.log("200");

        if (accountDataText.textContent !== "") {
          accountDataText.textContent = "";
        }

        raidDataText.textContent = JSON.stringify(data, undefined, 2);
      }
    });
  });
});
