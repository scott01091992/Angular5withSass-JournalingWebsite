//modules
const express = require('express');
mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

app.use(express.static(path.join(__dirname,'./dist')));

app.use(bodyParser.json());

var storageInterest = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './src/assets/interests/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

var storageJournal = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './src/assets/entryimgs/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

var storageReview = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './src/assets/reviewimgs/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

uploadInterest = multer({ //multer settings
                    storage: storageInterest
                }).single('file');

uploadJournal = multer({ //multer settings
                    storage: storageJournal
                }).single('file');

uploadReview = multer({ //multer settings
                    storage: storageReview
                }).single('file');

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(6789, function(){
 console.log("listening on port 6789");
});
