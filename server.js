const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const path = require('path');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 9000;

const {initPayment, responsePayment} = require("./paytm/services/index");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, strict: false}));

app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/paywithpaytm", (req, res) => {
    initPayment(req.query.amount).then(
        success => {
            res.render("paytmRedirect.ejs", {
                resultData: success,
                paytmFinalUrl: process.env.PAYTM_FINAL_URL
            });
        },
        error => {
            res.send(error);
        }
    );
});

app.post("/paywithpaytmresponse", (req, res) => {
    responsePayment(req.body).then(
        success => {
            res.render("response.ejs", 
                {resultData: "true", responseData: success},
            );
        },
        error => {
            res.send(error);
        }
    );
});

app.post("/wallet", (req, res) => {
    console.log('inside /wallet URL');
    console.log(req.body);
    console.log(req.body.amount);
    initPayment(req.body.amount).then(
        success => {
            console.log('inside initpayment');
            res.render("paytmRedirect.ejs", {
                resultData: success,
                paytmFinalUrl: process.env.PAYTM_FINAL_URL
            });
        },
        error => {
            res.send(error);
        }
    );
});

app.get('/', function(req, res) {
    res.send("API is workin.");
});

app.listen(PORT, () => {
    console.log("Running on " + PORT);
});
