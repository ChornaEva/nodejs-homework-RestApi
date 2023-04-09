const monggose = require("mongoose");
const app = require("./app");
// require("dotenv").config();
const { DB_HOST } = process.env;

console.log(DB_HOST);

monggose
  .connect(DB_HOST)
  .then(
    () => app.listen(3000),
    () => {
      console.log("Server running. Use our API on port:3000");
    }
  )
  .catch((error) => console.log(error.message));
