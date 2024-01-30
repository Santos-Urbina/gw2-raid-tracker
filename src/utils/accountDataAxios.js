//Get account data using axios library
const axios = require("axios");
const config = require("../../config.json");
const { response } = require("express");

const accessToken = config.accessToken;

const accountData = (callback) => {
  axios
    .get(`https://api.guildwars2.com/v2/account?access_token=${accessToken}`)
    .then((response) => {
      //handle succecss
      //console.log(response.data);
      console.log("Successful api call");
      callback(response.data);
    })
    .catch((error) => {
      //handle error
      console.log(error);
    })
    .finally(() => {
      //always executed
      console.log("Finally");
    });
};

module.exports = accountData;
