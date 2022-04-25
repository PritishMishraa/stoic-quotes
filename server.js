const express = require("express")
const bodyParser = require('body-parser');
const fs = require("fs")
const cors = require('cors')

const app = express()

app.use(express.static("src"))
app.use(bodyParser.json())
app.use(cors())

app.get('/quote', (req, res) => {
    fs.readFile('quotes.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        var qarr = JSON.parse(data);
        var random = Math.floor(Math.random() * (qarr.quotes.length - 1));
        res.send(qarr.quotes[random]);
    });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})