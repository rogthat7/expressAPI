const express = require('express');
const mongoose = require('mongoose');
const swaggerUi  = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const serverless = require('serverless-http');

const url = 'mongodb://localhost/AlienDBex';
const app = express();
const port = process.env.PORT || 9000 ;


const router = require('./routes/aliens');

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', () => {
    console.log('connected...');
});
app.use(express.json());
app.use('/aliens', router);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//app.use('./netlify/fucntions/api',router);

app.listen(port, () => {
    console.log(`Server Started. API running on http://localhost:${port}/swagger`);
});

module.exports.handler = serverless(app)