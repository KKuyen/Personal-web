import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect, ReactNode } from 'react';
import styles from './education.module.css'; // Update the import statement
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
      <span className={styles.sun_highlight}>Venus </span>is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. <span className={styles.sun_highlight}>Venus</span> is notable for having the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover. At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a pressure of 92 times that of Earth's at sea level. 

</div>
      <div className={styles.suntext} >
    

      These extreme conditions compress carbon dioxide into a supercritical state close to <span className={styles.sun_highlight}>Venus</span>'s surface.
      </div>

      </div>
      <a  className={styles.fwiki}  href="https://en.wikipedia.org/wiki/Venus" target="_blank" rel="noopener noreferrer">
     
        <div className={styles.wikitxt}>Wikimedia

        </div>
        <img  className={styles.imglink}  src="/link.png" alt="Description 3" />
       

     
      </a>
     
   
    </div>
    </>
  )
}

export default Sun;