// components/Function1.tsx
import { Link } from 'react-router-dom'; // Import Link


import styles from './Function1.module.css';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
  import { useNavigate } from 'react-router-dom';
  interface Function2Props {
    setActiveLink: Dispatch<SetStateAction<string>>;
  }
  
  
  const Function1: React.FC<Function2Props> = ({ setActiveLink }) => {
    const navigate = useNavigate();
    
  
    useEffect(() => {
      setActiveLink('/');
    }, [setActiveLink]);
  return (
    <>
  
      <div className={styles.function1Container}>
        <div className={styles.planetContainer}>
        
          {/* Bọc hình ảnh bằng Link và chỉ định đường dẫn tới Function2 */}
          <Link to="/Summary" title='Summary'>
            <img className={styles.images} draggable="false" src="/sunHalf.png" alt="Sun Half" />
          </Link>
          <Link to="/Certificate" title='Certificate'>
          <img className={styles.Mercury} draggable="false" src="/Mercury.png" alt="Mercury" />
          </Link>
          <Link to="/Education" title='Education'>
          <img className={styles.Venus} draggable="false" src="/Venus.png" alt="Venus" />
          </Link>
          <Link to="/Experience" title='Experience'>
          <img className={styles.Earth} draggable="false" src="/Earth.png" alt="Earth" />
          </Link>
         

        <img className={styles.Mars} draggable="false" src="/Mars.png" alt="Mars" />
        <img className={styles.Jupiter} draggable="false" src="/Jupiter.png" alt="Jupiter"/>
        <Link to="/Skills" title='Skills'>
        <img className={styles.Saturn} draggable="false" src="/Saturn.png" alt="Saturn"/>
        </Link>
        <img className={styles.Uranus} draggable="false" src="/Uranus.png" alt="Uranus"/>
        <img className={styles.Neptune} draggable="false" src="/Neptune.png" alt="Neptune"/>
         <Link to="/Projects" title='Projects'>
        <img className={styles.Pluto} draggable="false" src="/Pluto.png" alt="Pluto"/>
        </Link>
        </div>

      </div>
      
    </>
  );
}

export default Function1;