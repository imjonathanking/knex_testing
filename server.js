// Requiring dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes");

const BodyParser = require("body-parser");

// Define middleware here
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`
[-------------------------------------------------------------]
    ☄️  ==> Express API Server now listening on PORT: ${PORT}!
[-------------------------------------------------------------]`
);
});