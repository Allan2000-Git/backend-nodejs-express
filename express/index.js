const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express')
const server = express();


// logger middleware - application level middleware (which will run whenever app runs)
server.use((req,res,next)=>{
    console.log(req.method, req.ip, new Date(), req.get('User-Agent'));
    next()
})


// auth middleware
const auth = (req,res, next)=>{
    if(req.query.user){
        console.log(req.query);
        next()
    }else{
        res.send(401)
    }
}

server.get('/', auth, (req,res)=>{
    res.send({type:'GET'})
})




// API - Endpoint - Route
server.get('/', (req,res)=>{
    res.send({type:'GET'})
})

server.put('/', (req,res)=>{
    res.send({type:'PUT'})
})

server.delete('/', (req,res)=>{
    res.send({type:'DELETE'})
})

server.patch('/', (req,res)=>{
    res.send({type:'PATCH'})
})




server.get('/demo', (req,res)=>{
    // res.send("hello world!");
    // res.send("<h1>Hello world!</h1>");
    // res.send(index)
    // res.json(data)
    res.sendStatus(200)
})

server.listen(8080,()=>{
    console.log('server started');
})

