import { useEffect, useState } from 'react'
import TagBtn from './components/TagBtn.jsx'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = ['header', 'projects', 'about', 'skills'];

    const scrollState = () => {
      setVisible(window.scrollY > 0);

      // Track which section is closest to viewport center
      const viewportCenter = window.innerHeight / 2;
      let minDist = Infinity;
      let closestIdx = 0;

      sectionIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const dist = Math.abs(sectionCenter - viewportCenter);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });

      setActiveIndex(closestIdx);
    };
    window.addEventListener('scroll', scrollState);
    return () => window.removeEventListener('scroll', scrollState);
  }, []);

  return (
    <>
      <TagBtn />
      <Header />
      <Nav className={visible ? 'visible' : ''} activeIndex={activeIndex} />
      <div id='content' className={visible ? 'visible' : ''}>
        <Projects />
        <About />
        <Skills />
      </div>
      <Footer />
    </>
  )
}

export default App