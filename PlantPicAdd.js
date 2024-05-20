// PlantPicAdd.js
const express = require("express");
const path = require('path');
const app = express();
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    fs.readdir('./uploads', (err, files) => {
      if (err) {
        console.log(err);
        return;
      }

      let fileNumbers = files.map(file => parseInt(file.replace('Plant', '').replace(path.extname(file), '')));
      fileNumbers.sort((a, b) => a - b);

      let nextNumber = 1;
      for(let i = 0; i < fileNumbers.length; i++) {
        if(fileNumbers[i] !== i + 1) {
          nextNumber = i + 1;
          break;
        }
        nextNumber = fileNumbers.length + 1;
      }

      cb(null, 'Plant' + nextNumber + path.extname(file.originalname));
    });
  }
})

const fileFilter = (req, file, cb) => {
  // 허용되는 이미지 확장자
  const filetypes = /jpeg|jpg|png|gif/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }

  cb("Error: File upload only supports the following filetypes - " + filetypes);
}

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
})

module.exports = upload;