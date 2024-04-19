//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const folderName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let validationCheck = (req,res,next) => {
    if(req.body.password != "ItsASecret"){
        res.sendFile(folderName + "/public/index.html");
    } else {
        res.sendFile(folderName + "/public/secret.html");
    }
}

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(folderName + "/public/index.html");
});

app.post("/check", (req,res) => {
    validationCheck(req,res)
    console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
