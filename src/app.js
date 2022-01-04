const express = require("express")

const app = express()

app.listen(3001, () => console.log("Servidor online"))

app.get('/', (req, res) => {
  res.send("Minha primeira rota")
})
