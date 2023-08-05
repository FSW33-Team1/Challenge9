const express = require('express');
const app = express();
const PORT = 4000;
const apiRouter = require('./controller/index')

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.set('view engine', 'ejs')
// require('./controller')

// app.get('/', (req,res) => {
//   res.send('hello')
// })

require('./controller')(app);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  }
)