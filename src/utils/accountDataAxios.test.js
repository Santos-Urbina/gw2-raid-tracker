const accountData = require("./accountDataAxios");

test("account data", () => {
  console.log("yes");

  const dataTest = accountData((error, body) => {});
});

// To get this to work had to use latest version of jest,
// earlier version did not work with axios.
