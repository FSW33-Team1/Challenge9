const express = require('express')
const app = express()
const PORT = 4000

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })