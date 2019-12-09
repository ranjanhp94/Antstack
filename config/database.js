const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27018/antstack', { useNewUrlParser: true })
    .then(function () {
        console.log('connected to db')
    }).catch(function () {
        console.log('error connecting to db')
    })

module.exports = {
    mongoose
}