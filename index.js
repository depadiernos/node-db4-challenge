const express = require("express")
const helmet = require("helmet")
const cookbook = require("./model/cookbook-model")

const server = express()
const port = process.env.PORT || 4000

server.use(helmet())
server.use(express.json())

server.get("/", async (req, res, next) => {
  try {
    // get all recipes from the database
    res.json({message: "this is working"})
})

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({
    message: "Something went wrong",
  })
})

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})