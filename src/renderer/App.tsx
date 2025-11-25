import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  const handleClick = async () => {
    await window.api.openBrowser();
  };

  const handleGetContens = async () => {
    await window.api.getContents();
  };

  return (
    <div>
      <h1>테스트 </h1>
      <button type="submit" onClick={handleClick}>
        네이버 접속하기
      </button>
      <button type="submit" onClick={handleGetContens}>
        뉴스 요약 가져오기
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
