const path = require("path");
const express = require("express");
const hbs = require("hbs");
const chalk = require("chalk");

const raidEncounterData = require("./utils/raidEncounterData");

const app = express();
const port = process.env.PORT || 8080;

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../template/partials");

//set up hbs as the view engine, set views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "GW2 Raid Tracker",
  });
});

app.get("/raids", (req, res) => {
  raidEncounterData((error, body) => {
    if (error) return res.send(error);

    res.send({ body: body });
  });
});

app.listen(port, () => {
  console.log(chalk.bgCyan.bold(`Server up on port ${port}`));
});
