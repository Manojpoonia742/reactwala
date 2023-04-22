const connectToMongo =require('./db')
const express=require('express');
const cors = require('cors')

connectToMongo();
const app=express()
app.use(cors())
const port=process.env.PORT || 5000;

app.use(express.json())


// availeable Routes
app.use('/api/auth',require('./routes/auth'))


app.listen(port,()=>{
console.log(`app listening on http://localhost:${port}`)
})