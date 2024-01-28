//May not need this, just trying out getting data using fetch library since
//request is deprecated
const fetch = require("node-fetch");
const config = require("../../config.json");
const { json } = require("express");

const accessToken = config.accessToken;

const response = fetch(
  `https://api.guildwars2.com/v2/account?access_token=${accessToken}`
).then((response) => {
  console.log("got it");
  return response;
});
//const accountData = response.json();

response.then((result) => {
  console.log(result);
});

console.log(response);
