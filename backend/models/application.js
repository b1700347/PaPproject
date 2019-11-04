const mongoose = require ('mongoose');

const applicationSchema = mongoose.Schema({
  applicationDate: {type: Date, required: true},
  requiredDate: {type: Date, required: true},
  status: {type: String, required:  true}
});

module.exports = mongoose.model('Application', applicationSchema);
