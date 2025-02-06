// // stack overflow solution to "Cannot redeclare block scoped variable" is exporting empty {} 
export {}; 
const express = require('express');
const axios = require('axios')
const dotenv = require('dotenv').config()
const { request: Req } = require('express')
const { response: Res } = require('express')
const app = express();
const PORT = process.env.PORT

app.get('/', async(req: typeof Req, res: typeof Res) => {
    res.send("welcome to arkmind")
    console.log("sample button clicked !")
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
