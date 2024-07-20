// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Function1 from './components/SOLAR';
import Function2 from './components/Summary';
import Function3 from './components/Education';
import Function4 from './components/Experience';
import Function5 from './components/Skills';
import Function6 from './components/Projects';
import Function7 from './components/Certificate';

// Import các component khác tương tự
import './App.css'; // Đảm bảo bạn đã import CSS
import { useState } from 'react';


const App: React.FC = () => {
 
  document.addEventListener('keydown', function(event) {
    // Kiểm tra nếu phím Ctrl (hoặc Cmd trên macOS) và phím S được nhấn cùng lúc
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      // Ngăn chặn hành động mặc định của trình duyệt
      event.preventDefault();
      // Bạn có thể thêm logic ở đây nếu muốn thông báo cho người dùng hoặc thực hiện hành động khác
    
    }
  });
  const [activeLink, setActiveLink] = useState<string>('');
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav-links">
          <li className={`tag1 ${activeLink === '/' ? 'active' : ''}`} onClick={() => setActiveLink('/')}>
              <Link to="/">SOLAR</Link>
            </li>
            
          </ul>
          <ul className="nav-links2">
          <li className={`tag2 ${activeLink === '/Summary' ? 'summary' : ''}`} onClick={() => setActiveLink('/Summary')}>
              <Link to="/Summary">Summary</Link>
            </li>
            <li className={`tag2 ${activeLink === '/Education' ? 'education' : ''}`} onClick={() => setActiveLink('/Education')}>
              <Link to="/Education">Education</Link>
            </li>
            <li className={`tag2 ${activeLink === '/Experience' ? 'experience' : ''}`} onClick={() => setActiveLink('/Experience')}>
              <Link to="/Experience">Experience</Link>
            </li>
            <li className={`tag2 ${activeLink === '/Skills' ? 'skills' : ''}`} onClick={() => setActiveLink('/Skills')}>
              <Link to="/Skills">Skills</Link>
            </li>
            <li className={`tag2 ${activeLink === '/Projects' ? 'projects' : ''}`} onClick={() => setActiveLink('/Projects')}>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className={`tag2 ${activeLink === '/Certificate' ? 'certificate' : ''}`} onClick={() => setActiveLink('/Certificate')}>
              <Link to="/Certificate">Certificate</Link>
            </li>
           
          </ul>
        </nav>

        <Routes>
          <Route path="/"element={<Function1 setActiveLink={setActiveLink} />}  />
 <Route path="/Summary" element={<Function2 setActiveLink={setActiveLink} />} />
 <Route path="/Education" element={<Function3 setActiveLink={setActiveLink} />} />
          <Route path="/Experience" element={<Function4 setActiveLink={setActiveLink} />} />
          <Route path="/Skills" element={<Function5 setActiveLink={setActiveLink} />}  />
          <Route path="/Projects"element={<Function6 setActiveLink={setActiveLink} />} />
          <Route path="/Certificate"element={<Function7 setActiveLink={setActiveLink} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;