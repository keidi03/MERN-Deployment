const PirateController = require("../controllers/pirate.controller");
module.exports = (app) => {
  app.post("/api/pirate/addnew", PirateController.createPirate);
  app.get("/api/profile", PirateController.getAllPirates);
  app.delete("/api/pirate/:id", PirateController.deletePirate);
  app.patch("/api/pirate/:id", PirateController.editPirate);
  app.get("/api/pirate/:id", PirateController.getPirate);
};
