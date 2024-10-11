import React, { useState, useEffect } from "react";
import "./result.css";

const Result = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    // 서버에서 이미지 URL과 인공지능 결과를 가져오는 로직
    fetch("/diagnosis/results")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.imageUrl);
        setAiResult(data.aiResult);
        // AI 결과를 질문으로 사용하여 GPT에 요청
        return fetch("/ask-gpt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: data.aiResult }), // AI 결과를 질문으로 사용
        });
      })
      .then((response) => response.json())
      .then((data) => {
        setGptResponse(data.answer); // GPT의 답변 저장
        // 대화 기록에 AI 결과와 GPT 답변 추가
        setConversation((prev) => [
          ...prev,
          { question: aiResult, answer: data.answer },
        ]);
      })
      .catch((error) =>
        console.error("Error fetching diagnosis results or asking GPT:", error)
      );
  }, []);

  const handleQuestionSubmit = (event) => {
    event.preventDefault();

    // GPT에 추가 질문 보내기
    fetch("/ask-gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: userQuestion }),
    })
      .then((response) => response.json())
      .then((data) => {
        // 대화 기록 업데이트
        setConversation((prev) => [
          ...prev,
          { question: userQuestion, answer: data.answer },
        ]);
        setUserQuestion(""); // 질문 입력 초기화
      })
      .catch((error) => console.error("Error asking GPT:", error));
  };

  return (
    <div>
      <h1>Diagnosis Results</h1>
      <div className="plant-container">
        <div>
          {/* 사진 및 진단결과 */}
          <div className="data-content">
            <h2>입력 데이터 사진</h2>
            {/* <!-- 임시 이미지 경로 --> */}
            <img
              src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
              alt="Diagnosis"
            />
            {imageUrl && <img src={imageUrl} alt="Diagnosis" />}
          </div>
          <div className="data-content">
            <h2>AI 진단 결과</h2>
            <img
              src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
              alt="Diagnosis"
            />
            <p>{aiResult}</p>
          </div>
        </div>
        {/* GPT 답변 및 질문  */}
        <div className="data-content">
          <h2>Conversation</h2>
          <div className="conversation">
            {/* 임시데이터 */}
            <div className='conversation-item gpt'><strong>GPT</strong> AI 진단 결과 예시입니다.</div>
            <div className='conversation-item user'><strong>나</strong> AI 결과에 대해 궁금한 점이 있어요.</div>
            {conversation.map((item, index) => (
              <div
                key={index}
                className={`conversation-item ${ item.question ? "user" : "gpt"}`}>
                <p>
                  <strong>{item.question ? "나" : "GPT"}:</strong>{" "}{item.question || item.answer}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <input
              type="text"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="궁금한 점이 있으면 추가 질문을 입력해주세요!"
            />
            <button type="submit">질문하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Result;
