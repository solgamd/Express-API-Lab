const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes'); //auto looks for index file

let app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client')); //auto looks for index file

app.use('/api', apiRouter);



let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server up!'));