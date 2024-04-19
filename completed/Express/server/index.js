import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hellooooo</h1>")
})


app.get("/about", (req, res) => {
    res.send("<button>This is a button for the about me page.</button>")
})

app.get("/contact", (req, res) => {
    res.send("<button>This is a button for the contact page.</button>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})