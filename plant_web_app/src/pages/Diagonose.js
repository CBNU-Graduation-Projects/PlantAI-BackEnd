import React, { useState, useEffect } from 'react';
import './diagonose.css'

const Diagonose = () => {
  const [files, setFiles] = useState([]);

  //드래그앤드롭 여부확인
  const [isActive, setActive] = useState(false);

  // modify 또는 delete 폼 확인
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  // Fetch files from server
  useEffect(() => {
    fetch('/files')
      .then(response => response.json())
      .then(files => {
        setFiles(files);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
      });
  }, []); // Empty dependency array ensures effect runs only once

  // Handle file modification
  const handleModifyFile = (fileName, formData) => {
    fetch(`/file/${fileName}`, { method: 'PUT', body: formData })
      .then(response => {
        if (response.ok) {
          alert('File modified successfully.');
          window.location.reload();  // Refresh the page
        } else {
          throw new Error('Could not modify the file.');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  // Handle file deletion
  const handleDeleteFile = fileName => {
    fetch(`/file/${fileName}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          alert('File deleted successfully.');
          window.location.reload();  // Refresh the page
        } else {
          throw new Error('Could not delete the file.');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    setActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const files = event.dataTransfer.files;
    const formData = new FormData();
    for (const file of files) {
      formData.append('myFile', file);
    }

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        alert('File uploaded successfully.');
        window.location.reload();
      } else {
        throw new Error('Could not upload the file.');
      }
    })
    .catch(error => {
      alert(error.message);
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const fileName = event.target.fileName.value;
    
    if (formType === 'modify') {
      const formData = new FormData(event.target);
      handleModifyFile(fileName, formData);
    } else if (formType === 'delete') {
      handleDeleteFile(fileName);
    }
  };

  return (
    <div>
      <h1>Welcome to the Test Page!</h1>
      <p>This is a test page for our Express application.</p>

    <div className='upload-plant-container'>
      <div className='upload-pic'>
      <h2>Upload Picture</h2>
      <form action="/upload" method="post" encType="multipart/form-data">
      <label className={`preview${isActive ? ' active' : ''}`}  // isActive 값에 따라 className 제어
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      >
        <input type="file" className="file" name="myFile" />
        <p>클릭 또는 파일을 이곳에 놓아주세요</p>
        <input type="submit" value="Upload" />
      </label>
      </form>


      <h2>
        <button onClick={() => {
          setFormType('modify');
          setShowForm(!showForm);
        }}>
          {showForm && formType === 'modify' ? 'Hide Modify Form' : 'Show Modify Form'}
        </button>
        <button onClick={() => {
          setFormType('delete');
          setShowForm(!showForm);
        }}>
          {showForm && formType === 'delete' ? 'Hide Delete Form' : 'Show Delete Form'}
        </button>
      </h2>

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="fileName" placeholder="Enter file name" required />
          {formType === 'modify' && <input type="file" name="myFile" />}
          <button type="submit">{formType === 'modify' ? 'Modify' : 'Delete'}</button>
        </form>
      )}
      </div>
      
      <div className='plant-info'>
      <h2>식물정보입력 칸</h2>
      <form action="/submit_plant_info" method="POST">
        <table>
            <tbody>
                <tr>
                    <th>식물종류선택</th>
                    <td>
                        <select name="plant_type">
                          {/* db에서 불러오는 형식으로 수정할것. */}
                            <option value="1">토마토</option>
                            <option value="2">파프리카</option>
                            <option value="3">망고</option>
                            <option value="4">포도</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>관수 주기 입력</th>
                    <td><input type="text" name="watering"/></td>
                </tr>
                <tr>
                    <th>광선량 입력</th>
                    <td><input type="text" name="sunlight"/></td>
                </tr>
                <tr>
                    <th>토양 환경 입력</th>
                    <td><input type="text" name="soil_condition"/></td>
                </tr>
            </tbody>
        </table>
        <button type="submit">저장</button>
       </form>
      </div>
      
      </div>

      <h2>Show Picture</h2>
      <div id="files">
        {files.map(file => (
          <div key={file}>
            <p>{file}</p>
            <img src={`/file/${file}`} alt={file} width="300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagonose;