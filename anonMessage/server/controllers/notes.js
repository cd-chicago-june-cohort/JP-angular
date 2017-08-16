var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    create: function(req, res) {
        console.log(req.body);
        var note = new Note({
            content: req.body.content
        });
        note.save(function(error) {
            if (error) {
                console.log('ERROR');
            } else {
                console.log('NOTE SUCCESFULLY SAVED!!!!');
                res.json({});
            }
        })
    },

    show: function(req, res) {
        Note.find({}, function(err, notes) {
            if (err) {
                console.log(err);
            } else {
                res.json(notes);                
            }
        })
    }

}