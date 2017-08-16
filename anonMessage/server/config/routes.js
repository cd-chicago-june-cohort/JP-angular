var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app) {

    app.get('/api/show', function (req, res){
        notes.show(req, res);
    });

    app.post('/api/create', function (req, res){
        console.log('MADE IT TO THE BACK END');
        notes.create(req, res);
    });

    app.all('*', function(req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })

};