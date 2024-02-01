const accountDataButton = document.querySelector("button");
const accountDataText = document.querySelector("#accountDataText");

accountDataButton.addEventListener("click", (e) => {
  e.preventDefault();

  accountDataText.textContent = "Loading...";

  fetch("/account").then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("404");
      } else {
        console.log("200");
        accountDataText.textContent = data.name;
      }
    });
  });
});
