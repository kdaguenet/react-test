const express = require('express')
const expressGraphQL = require("express-graphql")
const server = express();
const userSchema = require("./schemas/schema")

server.use("/salutGraphQl", expressGraphQL({
    graphiql: true,
    schema: userSchema
}))

server.listen(4000, () => {
    console.log("Serveur en écoute sur le port 4000")
})