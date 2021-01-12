const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())//looks for a request body and turns it into a req.body
app.use(morgan('dev')) //Logs requests to the console
//route

app.use((req,res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})//along with proxy, allows browser to take cross-origin servers

//Connect to DB
mongoose.connect('mongodb://localhost:27017/bountydb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
()=> console.log('Connected to the dB!')
)

app.use("/bounties", require("./routes/bountyRouter.js"))

//error handler
app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('the server is running on port 9000!')
})