// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Function1 from './components/Function1';
import Function2 from './components/Function2';
import Function3 from './components/Function3';
import Function4 from './components/Function4';
import Function5 from './components/Function5';
import Function6 from './components/Function6';
import Function7 from './components/Function7';

// Import các component khác tương tự
import './App.css'; // Đảm bảo bạn đã import CSS
import { useState } from 'react';


const App: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul className="nav-links">
          <li className='tag1'>
              <Link to="/SOLAR">SOLAR</Link>
            </li>
            
          </ul>
          <ul className="nav-links2">
          <li className='tag2'>
              <Link to="/Summary">Summary</Link>
            </li>
            
            <li className='tag2'>
              <Link to="/Education">Education</Link>
            </li>
            <li  className='tag2'>
              <Link to="/Experience">Experience</Link>
            </li>
            <li className='tag2' >
              <Link to="/Skills">Skills</Link>
            </li>
            <li className='tag2' >
              <Link to="/Projects">Projects</Link>
            </li >
            <li className='tag2' >
              <Link to="/Certificate">Certificate</Link>
            </li >
           
          </ul>
        </nav>

        <Routes>
          <Route path="/SOLAR" element={<Function1 />} />
          <Route path="/Summary" element={<Function2 />} />
          <Route path="/Education" element={<Function3 />} />
          <Route path="/Experience" element={<Function4/>} />
          <Route path="/Skills" element={<Function5 />} />
          <Route path="/Projects" element={<Function6/>} />
          <Route path="/Certificate" element={<Function7/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;