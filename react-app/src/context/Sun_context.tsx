import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './summary.module.css'; // Update the import statement
const Sun: React.FC = () => {
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
      The <span className={styles.sun_highlight}>Sun</span> is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. 

</div>
      <div className={styles.suntext} >
    

The <span className={styles.sun_highlight}>Sun</span> has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity.
      </div>

      </div>
      <a  className={styles.fwiki}  href="https://en.wikipedia.org/wiki/Sun" target="_blank" rel="noopener noreferrer">
     
        <div className={styles.wikitxt}>Wikimedia

        </div>
        <img  className={styles.imglink}  src="/link.png" alt="Description 3" />
       

     
      </a>
     
   
    </div>
    </>
  )
}

export default Sun;