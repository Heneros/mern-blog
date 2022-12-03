const express = require("express");
const { graphiql } = require("graphiql");

require('dotenv').config();


const schema = require("./schema/schema");

const port = process.env.PORT || 5000;
const { graphlHTTP } = require("express-graphql");
const app = express();

// connectDB();

app.listen(port, console.log(`Server running on port ${port}`));