import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './prjs_context.module.css'; // Update the import statement
interface MyObject {
  id: number;
  copanyname: string;
  text: string;
  utilized: string;
  linkgithub?: string;
}

const myArray: MyObject[] = [

];


const Summary: React.FC = () => {
  
  
  // Gọi hàm này sau khi DOM hoàn toàn được tải
 

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
      <div className={styles.text}>No experience</div>
    <div className={styles.scrollableList} >
      {myArray.map((item) => (
        <div key={item.id} className={styles.fbaoquanh}>
          <div className={styles.divngang}>
          <a href='https://student.uit.edu.vn/sites/daa/files/bangcap/22521225/22521225_bangcap_TOEIC_LR_20231215182217.jpg' className={styles.ngang} target="_blank" rel="noopener noreferrer" >
            <p className={styles.toeic}>
            {item.copanyname}
            </p>
            </a>
            <img className={styles.imglinktoeic}  src="/external-link.png" alt="Description 3" />
          </div>
          <div className={styles.divngang}>
              <p className={styles.Utilized}>Team members:     </p>
              <p className={styles.textuti}> 2</p>
              </div>
          <div className={styles.text}>
          {item.text}
            </div>
            
            <div className={styles.divngang}>
              <p className={styles.Utilized}>Utilized: </p>
              <p className={styles.textuti}> {item.utilized}</p>
              </div>
         
        </div>
      ))}
    </div>
      
    </div>
    </>
  )
}

export default Summary;

function setIsVisible(arg0: boolean) {
  throw new Error('Function not implemented.');
}
