const request = require("request");
const axios = require("axios");
const config = require("../../config.json");
const { response } = require("express");

const accessToken = config.accessToken;
const url = `https://api.guildwars2.com/v2/account/raids?access_token=${accessToken}`;

const raidEncounterData = (callback) => {
  axios
    .get(url)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("Raid data call successful"));
};

//Testing
// raidEncounterData((error, body) => {
//   if (error) {
//     return console.log(error);
//   }
//   if (body) {
//     return console.log(body);
//   }
// });

module.exports = raidEncounterData;
