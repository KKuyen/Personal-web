import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './education.module.css'; // Update the import statement

const Summary: React.FC = () => {
  const changeBackground = () => {
    const e1 = document.querySelector(`.${styles.animate}`) as HTMLElement;

  
     

        // Đặt màu nền sang màu thứ hai
      
        e1.animate([
          {transform: 'translateX(+100%)'},
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
     <div className={styles.divngang}>
      <a  className={styles.ngang}  href="https://www.uit.edu.vn/" target="_blank" rel="noopener noreferrer">
      <div className={styles.text_context_University}>University of Information <span style={{display: 'block'}}>Technology</span></div>
       
       <img   className={styles.imglink}  src="/external-link.png" alt="Description 3" />
      </a>
     
    
      
      
      <div className={styles.text_context_time}>Sep 2022 - present</div>
      

     </div>
    
     <div className={styles.divngang}>
      <div className={styles.red}>
        Major:
      </div>
      <div className={styles.white1}>
        Software Engineer
      </div>
      <div className={styles.red1} >
        GPA:
      </div>
      <div className={styles.white}>
        8.58/10
      </div>


     </div >
    </div>
    </>
  )
}

export default Summary;

function setIsVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}
