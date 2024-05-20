import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleSubmit = async () => {
    //제출시 발생하는 이벤트에 대한 작성. 
  }
  return (
    <div>
      <h1>식물상태 진단 시스템</h1>

      <form onSubmit={handleSubmit}>
        {/* <div>
        <Link to="/upload">[ 드래그에서 사진 입력 (multer 넣기) ]</Link>
        </div>
        <div>
        <h2> 식물정보입력 칸 </h2>
        <table>
          <tbody>
            <tr>
              <th>식물종류선택</th>
              <td>식물종류데이터</td>
            </tr>

            <tr>
              <th>관수 주기 입력</th>
              <td>데이터2</td>
            </tr>

            <tr>
              <th>광선량 입력</th>
              <td>데이터3</td>
            </tr>

            <tr>
              <th>토양 환경 입력</th>
              <td>데이터4</td>
            </tr>
          </tbody>
        </table>
        </div> */}
      

      {/* 구분선 hr */}
      <hr />
      <div>
        <button type='submit'>[ 식물 상태 진단 ]</button>
      </div>
      </form>
    </div>
  );
};

export default Home;