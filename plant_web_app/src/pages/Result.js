import React from 'react';
import './result.css';

const Result = () => {
    return (
        <div>
            <h1>Diagnosis Results</h1>
            <div className="plant-container">
                <div className="data-content">입력데이터 사진</div>
                <div className="data-content">Chat GPT 답변 내용</div>
                <div className="data-content">인공지능 결과값</div>
                <div className="data-content">추가 입력 칸</div>
            </div>
        </div>
    );
}

export default Result;
