import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './summary.module.css'; // Update the import statement

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
      <div className={styles.divngang} > 
        <p className={styles.text_context_Summary} >I'm  </p> 
        &nbsp; 
        &nbsp; 
        &nbsp;
      <p className={styles.text_context_Summary2} > Tran Hong</p> 
      </div>
      
      <p className={styles.text_context_Summary22} > 
        Quyen,
      </p>
      <p className={styles.text_context_Summary3}>
        a developer
      </p>
      <div className={styles.divngang2}>
      <a    href="https://www.facebook.com/profile.php?id=100016665279719" target="_blank" rel="noopener noreferrer">
    <img className={styles.img} src="/facebook.png" alt="Description 1" />
  </a>
  <a   href="https://www.linkedin.com/in/quy%E1%BB%81n-tr%E1%BA%A7n-h%E1%BB%93ng-33a381257/"target="_blank" rel="noopener noreferrer">
    <img  className={styles.img2}  src="/linked.png" alt="Description 2" />
  </a>
  <a href="https://github.com/KKuyen" target="_blank" rel="noopener noreferrer">
    <img  className={styles.img3}  src="/github.png" alt="Description 3" />
  </a>

      </div>

    </div>
    </>
  )
}

export default Summary;