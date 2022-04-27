const express = require('express')
const app = express()
const path = require('path')
const port = 3000
// custom
app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
  res.render('index', )
})
app.get('/upload', (req, res)=>{
    res.render('upload-section', )
})

//custom  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})