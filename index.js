const  express = require('express')
const bodyParser = require(bodyParser)
const app = express()

app.use(express.json())
app.use(bodyParser.json())

 app.listen(3000,()=>{
     console.log("ON")
 })