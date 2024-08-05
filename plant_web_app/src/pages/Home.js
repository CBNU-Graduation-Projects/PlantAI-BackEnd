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
      <section className="section">
        <h2 className='sectiontitle'>Welcome to "Porototype"</h2>
        <p className='sectiondescribe'>
          Hello! ＜Prototype＞ is an innovative system designed to help you diagnose your plant’s health easily and quickly.
          Utilizing the latest technology, this system analyzes photos of your plants to accurately assess their health condition.
          Users can simply upload a photo and enter necessary data, and the system will provide an instant diagnosis of the plant’s health.
          <br />
          <br />Additionally, based on the diagnosis, it offers recommendations for necessary actions and provides useful tips and information for problem-solving. ＜Prototype＞ introduces a new approach to plant care, helping you maintain and enhance the health of your plants.
        </p>
      </section>
      <section className="section">
        <h2 className='sectiontitle'>How to Use</h2>
        <p className='sectiondescribe'>
          1. Upload a Photo of Your Plant<br />
          Users start by uploading a photo of the plant they want to diagnose. Ensure the photo clearly shows the entire plant and any specific issues.<br />

          2. Enter Plant Data<br />
          Provide necessary information such as the plant type, location, and recent care details. This helps improve the accuracy of the diagnosis.<br />

          3. Analyze the Photo to Diagnose the Plant’s Health<br />
          The uploaded photo and entered data are analyzed by the system to assess the plant’s current health status. The diagnosis results are provided instantly.<br />

          4. Review the Diagnosis Results and Explore Solutions with ChatGPT<br />
          After reviewing the diagnosis results, you will receive recommendations for necessary actions and care tips. You can also use ChatGPT to explore additional solutions and gain useful information about plant care.<br />

          5. Ongoing Monitoring and Updates<br />
          Regularly monitor the plant’s condition and upload additional photos if needed to update its status. This allows you to continuously manage and improve the health of your plant.<br />
        </p>
      </section>
      <section className="section">
        <h2 className='sectiontitle'>이 시스템을 사용해야하는 이유</h2>
        <ul>
          <li>장점1</li>
          <li>장점2</li>
        </ul>
      </section>
      <section className="section">
        <h2 className='sectiontitle'>자주 묻는 질문</h2>
        <h3>Q: 이 시스템은 무료인가요?</h3>
        <p>A: 네, 기본적인 진단 서비스는 무료로 제공됩니다.</p>
        <h3>Q: 어떤 식물들이 진단 가능한가요?</h3>
        <p>A: 현재 지원 중인 식 물은 토마토입니다.</p>
      </section>
      <section className="section">
        <h2 className='sectiontitle'>문의하기</h2>
        <p>시스템에 대한 문의는 <Link to="/contact">여기</Link>로 연락해 주세요.</p>
      </section>
    </div>
  );
};

export default Home;
