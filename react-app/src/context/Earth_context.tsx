import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect, ReactNode } from 'react';
import styles from './exp_context.module.css'; // Update the import statement
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
      <span className={styles.sun_highlight}>Earth </span>is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by <span className={styles.sun_highlight}>Earth </span>being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of <span className={styles.sun_highlight}>Earth </span>'s water is contained in its global ocean, covering 70.8% of <span className={styles.sun_highlight}>Earth</span>'s crust. The remaining 29.2% of <span className={styles.sun_highlight}>Earth</span>'s crust is land, most of which is located in the form of continental landmasses within <span className={styles.sun_highlight}>Earth </span>'s land hemisphere. Most of <span className={styles.sun_highlight}>Earth</span>'s land is somewhat humid and covered by vegetation, while large sheets of ice at <span className={styles.sun_highlight}>Earth</span>'s polar deserts retain more water than <span className={styles.sun_highlight}>Earth</span>'s groundwater, lakes, rivers and atmospheric water combined. <span className={styles.sun_highlight}>Earth</span>'s crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes.<span className={styles.sun_highlight}> Earth</span> has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.
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