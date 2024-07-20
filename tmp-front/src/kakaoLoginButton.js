// KakaoLoginButton.js

import React, { useEffect } from "react";
import kakaoLoginImage from "./images/kakao_login_medium_wide.png"; // 로컬 이미지 경로
 
const KakaoLoginButton = () => {
  useEffect(() => {
    // SDK 초기화
    // Kakao 객체가 존재하고 아직 초기화 되지 않았을 때만 초기화 
    if (window.Kakao && !window.Kakao.isInitialized()){
        window.Kakao.init("1e83556d7bbe641dbf2474e4becc1257"); // 발급받은 JavaScript 키로 대체
    }
  }, []);

  const handleLogin = () => {
    // 카카오 로그인 실행
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log("로그인 성공", authObj);
        // 이후 서버에 사용자 정보 요청 등 추가 처리
      },
      fail: (err) => {
        console.error("로그인 실패", err);
      },
    });
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        backgroundColor: "#FEE500",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      <img
        src={kakaoLoginImage} // 로컬 이미지 사용
        alt="카카오 로그인"
        style={{ width: "200px" }}
      />
    </button>
  );
};

export default KakaoLoginButton;
