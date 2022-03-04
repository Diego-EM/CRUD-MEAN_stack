const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { moongose } = require('./data');

const app = express();

app.set('port', process.env.PORT || 3000);

//Midlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/animals',require('./routes/animals.routes'));


//Initialization
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})