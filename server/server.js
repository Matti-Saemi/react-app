const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let port = process.env.PORT || 3001
let router = express.Router()
// let firstApi = require('./api_routes/first_api')

router.get('/', (req, res) => res.json({ message : 'Hello World!'}))
router.post('/login',
  (req, res) => res.json({
    email : req.body.email,
    name : "Asghar",
    token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTk3NDcwNDcsImV4cCI6MTU1MTI4MzA0NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.e_nUmhEpZ__v-qoGOyL1eiTTkogRGlNlKxZAr8lLeaY"
  }))

app.use('/api', router);
// app.use('/first_api', firstApi)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


app.listen(port,
    () => console.log(`Magic happens on port ${port}!`)
  )
