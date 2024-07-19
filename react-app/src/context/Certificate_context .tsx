import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './certificate_context.module.css'; // Update the import statement

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
      <div  className={styles.divdoc}>
        <div className={styles.fbaoquanh}>
        <div className={styles.baoquanh} >
    
    <div className={styles.ngang}>
    <a href='https://www.youtube.com/' className={styles.ngang} target="_blank" rel="noopener noreferrer" >
     
     <div className={styles.toeic}>TOEIC L&R</div>
     </a>
    
     <img className={styles.imglinktoeic}  src="/external-link.png" alt="Description 3" />
    </div>
      
      <div  className={styles.toeicdate}>2023</div>


   

         </div>
         <div className={styles.sodiem}>
         <div className={styles.toeicdate} > Score:</div>
         <div className={styles.toeicdate2} >820</div>


</div>
         </div>
       
        

      </div>
     
    </div>
    </>
  )
}

export default Summary;

function setIsVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}
