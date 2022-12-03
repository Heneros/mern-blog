const express = require("express");
const { graphiql } = require("graphiql");

require('dotenv').config();

const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const app = express();


connectDB();

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`));