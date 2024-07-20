
import './App.css';
import KakaoLoginButton from './kakaoLoginButton';


function App() {
  return (
    <div className="App">
      
        <h1>카카오 로그인 데모</h1>
        <div>
          <p>ID: <input></input></p>
          <p>PW: <input></input></p>
        </div>
        <KakaoLoginButton />
    </div>
  );
}

export default App;
