const express = require('express')
// const caesar = require('caesar-shift')


const app = express()



app.get('/sum', (req, res) => {
    let value1 = parseInt(req.query.a);

    let value2 = parseInt(req.query.b);

    let value = value1 + value2;
    res.send(`the sum of a and b is ${value}`)
})


// app.get('/cipher', (req, res) => {
//     app.use(caesar())
//     let code = encrypt(6, `${req.query.text}`);

    // let decode = decrypt(6, `${req.query.decodeText}`);

//     res.send(code)
// })

app.get('/lotto', (req, res) => {
    let arr = [0,0,0,0,0,0]

    let nums = arr.map( e => Math.floor(Math.random() * Math.floor(21)))
    let values = req.query.arr;



    res.send(`${nums}`)
})


app.listen(8000, () => {
    console.log('express server running')
})