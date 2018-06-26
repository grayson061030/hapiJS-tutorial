// import the mongoose
const mongoose = require('mongoose');
// get the schema class from mongoose
const Schema = mongoose.Schema;
// create an new object of the schema
const CompanySchema = new Schema({
    name: {
        required: true,
        type: String
    },
    city: String,
    address: String
});


module.exports = mongoose.model('Company',CompanySchema);