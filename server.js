// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require('cors');  
const upload = require('./PlantPicAdd');
const listFilesInDirectory = require('./PlantPicShow');
const deleteFile = require('./PlantPicDelete');
const modify = require('./PlantPicModify');

const app = express();
const PORT =  process.env.PORT || 4000;

// cors server - client 연결
app.use(cors()); 
// uploads 디렉토리를 정적 파일로 제공
app.use('/file', express.static(path.join(__dirname, 'uploads')));

//-----------------기본 틀 불러오기 -------------------
app.get("/", function (req, res) {
  console.log("root")
});

// -----------------파일 업로드하기 -------------------
app.post('/upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.redirect('/');  // 파일 업로드 후 메인 페이지로 리다이렉트
})

// -----------------파일 수정하기 -------------------
app.put('/file/:name', modify.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.status(200).send('File modified successfully.');
})

// ------------------파일 삭제하기 -------------------
app.delete('/file/:name', (req, res) => {
  const fileName = req.params.name;
  deleteFile('./uploads', fileName, (err) => {
    if (err) {
      return res.status(500).send('Could not delete the file.');
    }
    res.status(200).send('File deleted successfully.');
  });
});

// -----------------파일 출력하기 --------------------
app.get('/files', (req, res) => {
  listFilesInDirectory('./uploads', (err, files) => {
    if (err) {
      return res.send('Could not list the files.');
    }
    res.json(files);  // JSON 형식으로 파일 목록을 보냅니다.
  });
});

app.get('/file/:name', (req, res) => {
  const fileName = req.params.name;
  const filePath = path.join(__dirname, 'uploads', fileName);
  
  res.sendFile(filePath);
});

//서버 열었는지 여부 확인 가능.
app.listen(PORT, () => {
  console.log(`server on: http://localhost:${PORT}`);
});