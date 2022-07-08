const express = require('express')
const app = express()
const {dbget, dbpost, dbdelete, dbupdate} = require('./mongodb_facade')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors({'origin': "*"}))
app.use(bodyParser.json())

app.listen(3000, function(){
    console.log("Server is running on PORT 3000");
})


app.get('/', (req, res)=>{
    try{
        dbget().then(results=>{
            res.status(200).send(results)
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Unexpected error occurred...")
    }
})

app.post('/', (req, res)=>{
    try{
        dbpost(req.body).then(results=>{
            res.status(201).send(results)
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Unexpected error occurred...")
        }
})

app.delete('/:id', (req, res)=>{
     try{
        dbdelete(req.params.id).then(results=>{
            res.status(200).send(results)
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Unexpected error occurred...")
        }
})

app.put('/:id', (req, res)=>{
    try{
        dbupdate(req.params.id, req.body.value).then(results=>{
            res.status(200).send(results)
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Unexpected error occurred...")
        }
})

module.exports = app
