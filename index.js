const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine",'ejs')
app.get('/',(req,res)=>{
    res.send('Welcome !')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT);
