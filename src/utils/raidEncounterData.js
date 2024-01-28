const request = require("request");
const config = require("../../config.json");

const accessToken = config.accessToken;

const accountData = (callback) => {
  const url = `https://api.guildwars2.com/v2/account/raids?access_token=${accessToken}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to GW2 API");
    } else if (body.text === "Invalid access token") {
      callback("Invalid access token");
    } else {
      callback(undefined, body);
      //console.log(body);
    }
  });
};

accountData((error, body) => {
  if (error) {
    return console.log(error);
  }
  if (body) {
    return console.log(body);
  }
});
