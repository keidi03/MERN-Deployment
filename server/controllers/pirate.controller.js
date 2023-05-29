const { request } = require("express");
const Pirate = require("../models/pirate.model");

module.exports.createPirate = (request, response) => {
  try {
    if (request.body.crewPositon === "Capitan") {
      Pirate.findOne({ crewPositon: "Capitan" }).then((person) => {
        console.log(
          "🚀 ~ file: pirate.controller.js:7 ~ Pirate.findOne ~ person:",
          person
        );
        if (person) {
          return response.status(400).json({
            errors: { crewPositon: { message: "There is a Capitan" } },
          });
        } else {
          Pirate.create(request.body)
            .then((res) => response.status(200).json(res))
            .catch((err) => {
              console.log("aaaaaaaa", err);
              response.status(400).json(err);
            });
        }
      });
    } else {
      Pirate.create(request.body)
        .then((res) => response.status(200).json(res))
        .catch((err) => {
          console.log("aaaaaaaa", err);
          response.status(400).json(err);
        });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.getAllPirates = (request, response) => {
  Pirate.find({})
    .then((persons) => {
      let sortedPirates = [];
      if (persons.length > 0) {
        sortedPirates = persons.sort((a, b) => {
          if (a.pirateName < b.pirateName) {
            return -1;
          }
          if (a.pirateName > b.pirateName) {
            return 1;
          }
          return 0;
        });
      }
      response.status(200).json(sortedPirates);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.deletePirate = (request, response) => {
  const id = request.params.id;

  Pirate.deleteOne({ _id: id })
    .then((res) => {
      response.status(200).json(res);
    })
    .catch((err) => {
      //   console.log(
      //     "🚀 ~ file: pirate.controller.js:55 ~ module.exports.deletePirate ~ err:",
      //     err
      //   );
      response.status(400).json({});
    });
};

module.exports.editPirate = (request, response) => {
  const id = request.params.id;

  Pirate.findByIdAndUpdate(id, request.body)
    .then((res) => response.status(200).json(res))
    .catch((err) => response.status(400).json(err));
};

module.exports.getPirate = (request, response) => {
  const id = request.params.id;
  console.log("🚀 ~ file: pirate.controller.js:87 ~ id:", id);

  Pirate.findById(id)
    .then((res) => response.status(200).json(res))
    .catch((err) => response.status(400).json(err));
};
