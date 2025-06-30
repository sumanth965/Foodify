const express=require('express');
const RunServer = require('./database/connection');  //this can automatically,when we wrote RunServer()
const userRoutes=require('./routes/userRoutes');

const contactRoutes=require('./routes/contactRoutes')
// cross origin resourse sharing (used to connect frontend and backend)
const cors=require('cors')
// helmet is used for security
const helmet=require('helmet')


const app=express()
const port=3000;

RunServer()

// we are data's in json(javascript object notation) format
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/api/v1/user',userRoutes)
app.use('/api/v1',contactRoutes)


// we have to us backtics not single quote
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})