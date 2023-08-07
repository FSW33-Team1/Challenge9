const express = require('express')
const app = express()
const PORT = 4000
const model = require('./models')

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// app.listen(PORT, () => {
//     console.log(`Listening on http://localhost:${PORT}`)
//   })

require("./controller")(app);

model.sequelize.authenticate()
  .then(()=>{
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`)
    })
  }).catch((err)=>{
    console.log(err);
  })