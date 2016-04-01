var Band = require('../models/band');


module.exports = {
    
    addInstrument: function(req, res) {
        new Band(req.body).save(function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },
    
    getInstrument: function(req, res) {
        Band.find().then(function (response){
            res.send(response);
        })
    },
    
    removeInstrument: function(req, res) {
        Band.findByIdAndRemove(req.query._id, function (err, resp) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(resp);
            }
        });
    },
}