import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "testnamevt";
const yourPassword = "testpassword";
const yourAPIKey = "e4564ae1-bcac-4778-a237-59ecf42b45c5";
const yourBearerToken = "ff86ec31-d97d-49ca-b623-3af9b2b99582";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    let response = await axios.get("https://secrets-api.appbrewery.com/random");
    let result = response.data
    console.log(result)
    res.render("index.ejs", {
      content: JSON.stringify(result),
    })
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      content: "Failed to find Secret"
  })};
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try {
    let response = await axios.get("https://secrets-api.appbrewery.com/all?page2", {
      auth: {
          username: yourUsername,
          password: yourPassword
      }
    });
    let result = response.data
    console.log(result)
    res.render("index.ejs", {
      content: JSON.stringify(result),
    })
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      content: "Failed to find Secret"
  })};

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
    try {
      let response = await axios.get("https://secrets-api.appbrewery.com/filter",{
          params: {
            score: 5,
            apiKey: yourAPIKey}
      });
      let result = response.data
      console.log(result)
      res.render("index.ejs", {
        content: JSON.stringify(result),
      })
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
        content: "Failed to find Secret"
    })};
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  try {
    let response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`
      }
    });
    let result = response.data
    console.log(result)
    res.render("index.ejs", {
      content: JSON.stringify(result),
    })
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
      content: "Failed to find Secret"
  })};
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
