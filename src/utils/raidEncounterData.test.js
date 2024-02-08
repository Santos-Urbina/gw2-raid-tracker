const raidData = require("./raidEncounterData");

test("Weekly raid data", () => {
  console.log("yes");

  const dataTest = raidEncounterData((error, body) => {});
});

// To get this to work had to use latest version of jest,
// earlier version did not work with axios.
