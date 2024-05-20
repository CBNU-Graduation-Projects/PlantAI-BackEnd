// PlantPicShow.js
const fs = require('fs');

function listFilesInDirectory(directory, callback) {
    fs.readdir(directory, (err, files) => {
    if (err) {
        return callback(err);
    }
    callback(null, files);
    });
}

module.exports = listFilesInDirectory;
