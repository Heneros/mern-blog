const express = require("express");
const { graphiql } = require("graphiql");
const cors = require('cors');

require('dotenv').config();

const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const app = express();


connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`));