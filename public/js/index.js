const accountDataButton = document.querySelector("button");

accountDataButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("/account");
});
