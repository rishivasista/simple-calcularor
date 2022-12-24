import express from "express";
import path from "path";
import {
    fileURLToPath
} from "url";
import bodyParser from "body-parser";

const app = express();
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.route("/")
    .get((req, res) => {
        res.sendFile(__dirname + "/index.html");
    })

    .post((req, res) => {
        var num1 = Number(req.body.num1);
        var num2 = Number(req.body.num2);
        res.send("The result of addition of num1 and num2 is " + (num1 + num2));
    });

app.route("/bmicalculator")
    .get((req, res) => {
        res.sendFile(__dirname + "/bmiCalculator.html");
    })

    .post((req, res) => {
        var height =  parseFloat(req.body.height);
        var weight = parseFloat(req.body.weight);
        var bmi = weight / (height * height);
        res.send("Your BMI is " + bmi);
    });

app.listen(3000, () => {
    console.log("Server started on 3000 successfully!!");
});