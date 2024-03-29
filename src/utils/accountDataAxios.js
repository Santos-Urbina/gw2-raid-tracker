//Get account data using axios library
const axios = require("axios");
const config = require("../../config.json");
const { response } = require("express");

const accessToken = config.accessToken;
const url = `https://api.guildwars2.com/v2/account?access_token=${accessToken}`;

const accountData = (callback) => {
  axios
    .get(url)
    .then((response) => {
      //handle succecss
      //console.log(response.data);
      //console.log("Successful api call");
      callback(response.data);
    })
    .catch((error) => {
      //handle error
      //console.log(error);
    })
    .finally(() => {
      //always executed
    });
};

module.exports = accountData;
