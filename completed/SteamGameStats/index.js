import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express()
const port = 3000;
const API_URL = "https://api.steampowered.com"

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/js', express.static('node_modules/bootstrap/dist/js'))


//Use to import static folders 
//app.use(express.static("public"))

let newAppID ="2275020"

app.get("/", async (req,res) => {
    let result = await axios.get(API_URL + "/ISteamNews/GetNewsForApp/v0002/?appid=" + newAppID)
    let article = result.data.appnews.newsitems[0]
    res.render("index.ejs", {
        title: article.title,
        url: article.url,
        author: article.author,
        publisher: article.feedlabel,
        content: article.contents
    })
})

app.post("/submit", async (req, res) => {
    let newAppID = req.body.testingID;
    let result = await axios.get(API_URL + "/ISteamNews/GetNewsForApp/v0002/?appid=" + newAppID);
    let article = result.data.appnews.newsitems[0];
    console.log(article);
    res.render("index.ejs", {
        title: article.title,
        url: article.url,
        author: article.author,
        publisher: article.feedlabel,
        content: article.contents
    })
    // res.render("index.ejs", { numberOfLetters: numLetters });
  });
  



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})