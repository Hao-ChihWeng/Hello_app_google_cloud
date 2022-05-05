// async function getTexi() {
//   let data = await fetch(
//     "https://data.cityofchicago.org/resource/wrvz-psew.json?company=0118 - 42111 Godfrey S.Awir&$limit=1"
//   );
//   let parsedData = await data.json();
//   console.log(parsedData);
// }
// getTexi();

const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");

//middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
//index
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//taxi
app.get("/:taxi", (req, res) => {
  //console.log(req.params);
  let url =
    "https://data.cityofchicago.org/resource/wrvz-psew.json?trip_start_timestamp=2020-01-01T00:00:00.000&$limit=1";

  //get request made by node.js
  https
    .get(url, (response) => {
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);

      response.on("data", (d) => {
        let djs = JSON.parse(d);
        console.log(djs);
        res.render("taxi.ejs", { djs });
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
