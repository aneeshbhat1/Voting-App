// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var DistributionData = require('./DistributionData');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    pollName : {type : String},
    DistributionData: {type: Array}
});