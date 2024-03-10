require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Landing home page')
})
app.get('/twitter',(req,res)=>{
    res.send("Rajudotom");
})
app.get('/login',(req,res)=>{
    res.send("<h1>Please Login at Chai or code!</h1>");
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code!</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})