import { useEffect, useState } from 'react'
import TagBtn from './components/TagBtn.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'

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
      <Nav className={visible ? 'visible' : ''} />
      <div id='content' className={visible ? 'visible' : ''}>
        <Projects />
        <About />
      </div>
    </>
  )
}

export default App
