// const http = require('http')
// const routes = require('./route')
const express = require('express')
// console.log(routes.someText)
const app = express();
const path = require('path')

const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop')

const contact = require('./routes/contact-us')

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use(shop);
app.use(contact)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
// const server = http.createServer(app)
app.listen(5000);