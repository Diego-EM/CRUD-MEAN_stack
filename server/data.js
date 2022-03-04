const mongoose = require('mongoose');
const URI = "mongodb://localhost/usuarios";

mongoose.connect(URI)
    .then(() => console.log('Connection successfull'))
    .catch(err => console.error(err))