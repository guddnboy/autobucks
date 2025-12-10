import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Hello() {
  const [isOpenBrowser, setIsOpenBrowser] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const openBrowser = async () => {
    const isOpen = await window.api.openBrowser();
    if (!isOpen) return false;
    setIsOpenBrowser(isOpen);
    return isOpen;
  };

  const connectWifi = async () => {
    if (!isOpenBrowser) return false;
    const isAgreeAll = await window.api.checkAll();
    if (!isAgreeAll) {
      return false;
    }
    const isSubmit = await window.api.submit();

    setIsDone(isSubmit);
    return isSubmit;
  };

  const closeBrowser = async () => {
    const isClose = await window.api.closeBrowser();
    return isClose;
  };

  return (
    <div>
      <h1>테스트 </h1>
      <button type="button" onClick={openBrowser}>
        동의 페이지 접속하기
      </button>
      <button type="submit" onClick={connectWifi}>
        전부 동의 및 연결
      </button>
      <button type="button" onClick={closeBrowser}>
        브라우저 닫기
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
