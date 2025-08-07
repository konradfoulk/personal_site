'use client'
import "./page.css";
import TagBtn from "./components/TagBtn/TagBtn";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from 'react'

export default function Home() {
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
  );
}
