const Template = require("./template");
const enigma = require("../model/enigma");
const express = require("express");
const path = require("path");

const router = express.Router();
const template = new Template(path.resolve("templates/enigma_template.html"));

// Rota principal
router.get("/", (request, response) => {
    response.sendFile(path.resolve("templates/index.html"));
});

// Rota para obter ajuda
router.get("/help", (request, response) => {
    response.sendFile(path.resolve("templates/help.html"));
});

// Rota dos enigmas
router.post("/", (request, response) => {
    
    const new_enigma = enigma.getNewEnigma(request.body.fase, request.body.answer);

    if (new_enigma) {

        const filename = path.resolve("templates/enigmas/" + new_enigma + ".html");
        const content = template.inject(filename, "<!-- template -->");
        response.send(content);

    } else {
        response.sendStatus(403);
    }
});

module.exports = router;