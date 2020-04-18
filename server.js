const router = require("./controller/routes");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configurações

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(router);

// Inicia o servidor

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Conectado na porta " + PORT);
});
