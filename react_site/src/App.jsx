import { useEffect, useState } from 'react'
import TagBtn from './components/TagBtn.jsx'
import Header from './components/Header.jsx'

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollState = () => {
      setVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', scrollState);
    return () => window.removeEventListener('scroll', scrollState);
  }, []);

  return (
    <>
      <TagBtn />
      <Header />
      <div id='content' className={visible ? 'visible' : ''}>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
        <p>aaaaaa</p>
      </div>
    </>
  )
}

export default App
