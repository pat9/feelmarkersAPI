const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true})
        .then(db=> console.log('Database is ready'))
        .catch(err => console.log(err))

module.exports = mongoose;