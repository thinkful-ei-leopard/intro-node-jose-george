const express = require('express')
const app = express()


app.get('/sum', (req, res) => {
    let value1 = parseInt(req.query.a);

    let value2 = parseInt(req.query.b);
    
    let value = value1 + value2;
    res.send(`the sum of a and b is ${value}`)
})



app.listen(8000, () => {
    console.log('express server running')
})