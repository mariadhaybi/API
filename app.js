const express = require("express");
const app = express();
//require('dotenv').config();
const PORT = process.env.PORT || 3030;

// your code
app.get('/', function (req, res) {
    res.send('Hello World')})
    
    app.get('/students', function (req, res) {
        var data = [
            {id:1,name:'maria dh'},
            {id:6,name:'maria 1'},
            {id:9,name:'maria 2'},
            {id:5,name:'maria 3'},

        ]
        res.send(data)})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});