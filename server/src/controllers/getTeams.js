const fs = require("fs");
const path = require("path");
const { Teams } = require("../db");

const filepath = path.join(__dirname, "../..", "api", "db.json");

const getTeams = (req, res) => {
  try {
    const data = fs.readFileSync(filepath, "utf-8");
    const jsonData = JSON.parse(data);

    const teams = jsonData.drivers.map((team) => {
      return team.teams;
    });

    const teamsComplete = [];
    for (let i = 0; i < teams.length; i++) {
      if (teams[i] !== undefined) {
        teamsComplete.push(teams[i].split(","));
      }
    }
    let eachTeam = new Set(teamsComplete.flat());
    eachTeam = [...eachTeam];

    eachTeam.forEach(async (team) => {
      await Teams.findOrCreate({ where: { name: team } });
    });

    res.status(200).send(eachTeam);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
module.exports = { getTeams };
