// src/App.jsx
import './App.css';

function App() {

  // 音を再生する関数（変更なし）
  const playSound = (soundFile) => {
    // publicフォルダのパスを指定してAudioオブジェクトを作成
    const audio = new Audio(soundFile);
    audio.play();
  };

  return (
    <div className="App">
      <h1>Daigone's Quiz Buzzer 🔊</h1>
      <div className="button-container">
        {/* --- 1段目 --- */}
        <button 
          className="btn-deden" 
          onClick={() => playSound('/startingBell.mp3')}
        >
          デデン
        </button>
        <button 
          className="btn-correct" 
          onClick={() => playSound('/correct.mp3')}
        >
          正解
        </button>
        <button 
          className="btn-miss" 
          onClick={() => playSound('/miss.mp3')}
        >
          不正解
        </button>
        
        {/* --- 2段目 --- */}
        <button 
          className="btn-nice" 
          onClick={() => playSound('/nice.mp3')}
        >
          ﾅｲｽ
        </button>
        <button 
          className="btn-warning" 
          onClick={() => playSound('/warning.mp3')}
        >
          警告
        </button>
        <button 
          className="btn-aan" 
          onClick={() => playSound('/aan.mp3')}
        >
          ｱｱﾝ
        </button>
      </div>
    </div>
  );
}

export default App;