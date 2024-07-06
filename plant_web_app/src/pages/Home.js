import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  const handleSubmit = async () => {
    //제출시 발생하는 이벤트에 대한 작성. 
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className='hello'>식물상태 진단 시스템</h1>
      </header>
      <section className="section">
        <h2>소개</h2>
        <p>
          안녕하세요
          ＜가제＞는 당신의 식물의 상태를 쉽고 빠르게 진단할 수 있도록 도와줍니다!
        </p>
      </section>
      <section className="section">
        <h2>사용 방법</h2>
        <p>
          1. 식물의 사진을 업로드 합니다.<br />
          2. 식물 데이터를 입력해주세요<br />
          3. 사진을 분석하여 식물의 건강 상태를 진단합니다.<br />
          4. 진단 결과를 확인하고, chatGPT를 통한 해결방법을 알아가세요!
        </p>
      </section>
      <section className="section">
        <h2>이 시스템을 사용해야하는 이유</h2>
        <ul>
          <li>장점1</li>
          <li>장점2</li>
        </ul>
      </section>
      <section className="section">
        <h2>자주 묻는 질문</h2>
        <h3>Q: 이 시스템은 무료인가요?</h3>
        <p>A: 네, 기본적인 진단 서비스는 무료로 제공됩니다.</p>
        <h3>Q: 어떤 식물들이 진단 가능한가요?</h3>
        <p>A: 현재 지원 중인 식물은 토마토입니다.</p>
      </section>
      <section className="section">
        <h2>문의하기</h2>
        <p>시스템에 대한 문의는 <Link to="/contact">여기</Link>로 연락해 주세요.</p>
      </section>
    </div>
  );
};

export default Home;
