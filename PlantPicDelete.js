// PlantPicDelete.js
const fs = require("fs");
const path = require("path");

function deleteFile(directory, filename, callback) {
    const filePath = path.join(directory, filename);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);  // 오류를 로깅합니다.
        return callback(err);
      }
      callback(null);
    });
  }

module.exports = deleteFile;