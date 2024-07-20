import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './skill_context.module.css'; // Update the import statement

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
      <div className={styles.linethang}> </div>
    <div>
    <div >
    <div className={styles.Skillsline}>
       - C++, C#, Java, JavaScript(NodeJS), CSS, HTLM, TypeScript, XML, XAML

      </div>
      <div className={styles.Skillsline}>
       - WPF, Android Studio, JavaFX, React
      </div>
      
      <div className={styles.Skillsline}>
       - MS SQL Sever, MySQL
      </div>
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
