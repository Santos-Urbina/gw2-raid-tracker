const accountDataButton = document.querySelector("button");

accountDataButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("/account").then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log("404");
      } else {
        console.log("200");
      }
    });
  });
});
