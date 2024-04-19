import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const folderName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let day = new Date();

let dayVice = (day) =>{
    if (day === 0  || day === 6) {
        return "Hey! It's the weekend, it's time to have fun!"
    } else {
        return `Hey! It's a weekday, it's time to work hard!`
    }
}

app.get("/", (req, res) => {
  res.sendFile(folderName + "/public/index.html");
  res.render("index.ejs", 
  { advice: dayVice(day.getDay()) }
    );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
