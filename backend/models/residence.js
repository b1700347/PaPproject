const mongoose = require ('mongoose');

const residenceSchema = mongoose.Schema({
  residenceName: {type: String, required: true},
  address: {type: String, required: true},
  numUnits: {type: Number, required:  true},
  monthlyRental: {type: Number, required:  true},
  sizePerUnit: {type: Number, required:  true},
  facilities: {type: String, required: false},
  applications: {type: Array, required: true}
});

module.exports = mongoose.model('Residence', residenceSchema);
