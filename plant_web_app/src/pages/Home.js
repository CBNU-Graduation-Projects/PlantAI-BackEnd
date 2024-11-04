import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  const handleSubmit = async () => {
    //제출시 발생하는 이벤트에 대한 작성. 
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className='header neon'>Easily diagnose, <br /> your plant's health.</h1>
        <h1 className='rightalign'>—Your growing guide to thriving greenery!</h1>
      </section>
      <hr />
      <section className="section">
        <h2 className='sectiontitle'>Welcome to Plantalyze</h2>
        <p className='sectiondescribe'>
          안녕하세요! <b>Plantalyze</b>는 여러분의 식물 건강을 쉽고 빠르게 진단할 수 있도록 도와주고, 해결책을 제안하는 시스템입니다.
          Yolo 모델을 활용하여 식물의 사진을 분석하고 현재 상태를 확인합니다.
          따라서, 사용자가 단순히 사진을 업로드하고 필요한 데이터를 입력하면, 시스템이 즉시 식물의 건강 상태를 알려드립니다.
          <br />
          <br />또한, 결과를 바탕으로 필요한 조치를 추천하고 문제 해결을 위한 유용한 팁과 정보를 제공하여 여러분의 식물을 건강하게 유지하고 더 잘 관리할 수 있도록 도와줍니다.
        </p>

      </section>
      <section className="section">
        <h2 className='sectiontitle'>How to Use</h2>
        <p className='sectiondescribe'>
          <b>1. 식물 사진 업로드</b><br />
          사용자는 진단하려는 식물의 사진을 업로드합니다. 사진은 식물 전체와 특정 문제 부위가 잘 보이는 상태여야 합니다.<br /><br />

          <b>2. 식물 정보 입력</b><br />
          식물의 종류, 관수 주기, 광선량 같은 최근 관리 정보 등 필요한 데이터를 입력합니다. 이는 진단의 정확도를 높이는 데 도움이 됩니다.<br /><br />

          <b>3. 사진 분석을 통한 식물 건강 진단</b><br />
          업로드된 사진과 입력된 데이터가 시스템에 의해 분석되어 식물의 현재 건강 상태를 평가합니다. 진단 결과는 즉시 제공됩니다.<br /><br />

          <b>4. 진단 결과 검토 및 ChatGPT를 통한 해결책 탐색</b><br />
          진단 결과를 검토한 후, 필요한 조치와 관리 팁을 추천받습니다. 또한 ChatGPT를 활용하여 추가적인 해결책을 탐색하고 식물 관리에 대한 유용한 정보를 얻을 수 있습니다.<br /><br />

          <b>5. 지속적인 모니터링 및 업데이트</b><br />
          식물의 상태를 정기적으로 모니터링하고 필요 시 추가 사진을 업로드하여 상태를 업데이트합니다. 이를 통해 식물의 건강을 지속적으로 관리하고 개선할 수 있습니다.
        </p>

      </section>

      <section className="section">
      <h2 className='sectiontitle'>이 시스템을 사용해야 하는 이유</h2>
        <p className='sectiondescribe'>1. 간편한 사용: 사용자가 사진을 업로드하고 간단한 정보를 입력하기만 하면 쉽게 진단할 수 있습니다.</p>
        <p className='sectiondescribe'>2. 정확한 진단: 최신 기술을 활용하여 식물의 건강 상태를 신속하고 정확하게 분석합니다.</p>
        <p className='sectiondescribe'>3. 전문가 추천: 진단 결과를 바탕으로 필요한 조치와 관리 팁을 제공합니다.</p>
        <p className='sectiondescribe'>4. 지속적인 관리: 정기적으로 상태를 모니터링하고 업데이트할 수 있어, 식물 건강을 지속적으로 관리할 수 있습니다.</p>
      </section>

      <section className="section">
        <h2 className='sectiontitle'>자주 묻는 질문</h2>
        <p className='sectiondescribe'><h3>Q: 이 시스템은 무료인가요?</h3></p>
        <p className='sectiondescribe'>A: 네, 현재 기본적인 진단 서비스는 무료로 제공됩니다.</p>
        <p className='sectiondescribe'><h3>Q: 어떤 식물들이 진단 가능한가요?</h3></p>
        <p className='sectiondescribe'>A: 현재 지원 중인 식물 종류는 토마토, 상추, 고추입니다.</p>
      </section>
      <section className="section">
        <h2 className='sectiontitle'>문의하기</h2>
        <p>시스템에 대한 문의는 <Link to="/contact">여기</Link>로 연락해 주세요.</p>
      </section>
    </div>
  );
};

export default Home;
