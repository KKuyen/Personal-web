import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect, ReactNode } from 'react';
import styles from './prjs_context.module.css'; // Update the import statement
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
      <span className={styles.sun_highlight}>Pluto </span>(minor-planet designation: 134340  <span className={styles.sun_highlight}>Pluto</span>) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. It is the largest known trans-Neptunian object by volume, by a small margin, but is less massive than Eris. 
 </div>
      <div className={styles.suntext} >
    

      
Like other Kuiper belt objects, <span className={styles.sun_highlight}>Pluto </span>is made primarily of ice and rock and is much smaller than the inner planets. <span className={styles.sun_highlight}>Pluto </span>has roughly one-sixth the mass of Earth's moon, and one-third its volume.
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