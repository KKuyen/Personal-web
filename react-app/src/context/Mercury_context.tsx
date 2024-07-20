import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect, ReactNode } from 'react';
import styles from './certificate_context.module.css'; // Update the import statement
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
      <span className={styles.sun_highlight}>Mercury </span>is the first planet from the Sun and the smallest in the Solar System.In English, it is named after the ancient Roman god Mercurius ( <span className={styles.sun_highlight}>Mercury</span>), god of commerce and communication, and the messenger of the gods.<span className={styles.sun_highlight}>Mercury</span> is classified as a terrestrial planet, with roughly the same surface gravity as Mars.The surface of  <span className={styles.sun_highlight}>Mercury</span> is heavily cratered, as a result of countless impact events that have accumulated over billions of years. 
</div>
      <div className={styles.suntext} >
    

      Similarly to the Earth's Moon,<span className={styles.sun_highlight}> Mercury</span>'s surface displays an expansive rupes system generated from thrust faults and bright ray systems formed by impact event remnants.
      </div>

      </div>
      <a  className={styles.fwiki}  href="https://en.wikipedia.org/wiki/Mercury_(planet)" target="_blank" rel="noopener noreferrer">
     
        <div className={styles.wikitxt}>Wikimedia

        </div>
        <img  className={styles.imglink}  src="/link.png" alt="Description 3" />
       

     
      </a>
     
   
    </div>
    </>
  )
}

export default Mercury;