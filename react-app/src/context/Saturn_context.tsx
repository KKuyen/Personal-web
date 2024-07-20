import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect, ReactNode } from 'react';
import styles from './skill_context.module.css'; // Update the import statement
const Mercury: React.FC = () => {
  const changeBackground = () => {
    const e1 = document.querySelector(`.${styles.animate}`) as HTMLElement;

  
     

        // Đặt màu nền sang màu thứ hai
      
        e1.animate([
          {transform: 'translateX(-80%)'},
          { transform: 'translateX(0)' }
        ], {
          duration: 500, // 0.5 giây
          fill: 'forwards' // Giữ trạng thái cuối cùng của animation
        });
       
        
        
      
        // Kích hoạt animation cho sunElement
        
  
      
      // Đảo trạng thái màu nền
  
    
  };
  useEffect(() => {
    changeBackground();
  }, []); // Mảng rỗng [] nghĩa là effect này chỉ chạy một lần sau khi component được mount
  return  (
   
    <>
    <div className={styles.animate}>
      <div className={styles.fp} >
      <div className={styles.suntext} >
      <span className={styles.sun_highlight}>Saturn </span>is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine-and-a-half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive. Even though <span className={styles.sun_highlight}>Saturn</span> is nearly the size of Jupiter, <span className={styles.sun_highlight}>Saturn</span> has less than one-third of Jupiter's mass. </div>
      <div className={styles.suntext} >
    

      <span className={styles.sun_highlight}>Saturn</span> orbits the Sun at a distance of 9.59 AU (1,434 million km) with an orbital period of 29.45 years.
      </div>

      </div>
      <a  className={styles.fwiki}  href="https://en.wikipedia.org/wiki/Saturn" target="_blank" rel="noopener noreferrer">
     
        <div className={styles.wikitxt}>Wikimedia

        </div>
        <img  className={styles.imglink}  src="/link.png" alt="Description 3" />
       

     
      </a>
     
   
    </div>
    </>
  )
}

export default Mercury;