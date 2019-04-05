const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.json({ type: "/" }));
app.use(bodyParser.urlencoded({
    extended: false
}));

const routes=require('./RestaurantRouter')
app.use(routes)
app.listen(3000)