import { Link } from 'react-router-dom'; // Import Link

import React, { useEffect } from 'react';
import styles from './prjs_context.module.css'; // Update the import statement
interface MyObject {
  id: number;
  copanyname: string;
  text: string;
  utilized: string;
  linkgithub?: string;
  teammembers?: number;
  Responsibility?: string;
  time?: string;


}

const myArray: MyObject[] = [
  { id: 1, time:"2024",Responsibility:" UI Design, Database Design, Frontend(Navigation bar and Home function)" , copanyname: "Personal spending management application", text: "Developed a Android application using Android Studio that allow users to easily create virtual wallets, manage expense and income.", utilized: "Java, Android Studio, FireBase, MySQL, RESTful API", linkgithub: "https://github.com/NDHunq/SE114_QLCT", teammembers: 5 },
  { id: 1, time:"2024",Responsibility:" UI Design, Database Design, Frontend(Sign in, Create account, account management, Main UI and Navigation bar)" , copanyname: "Private clinic management application", text: "Developed a desktop application using JavaFx that allow users to easily manage private clinic.", utilized: "Java, JavaFx, SQL Server", linkgithub: "https://github.com/NDHunq/SE104_QLPMT", teammembers: 4},
  

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
    <div className={styles.scrollableList} >
      {myArray.map((item) => (
        <div key={item.id} className={styles.fbaoquanh}>
          <div className={styles.divngang3}>
          <a  href={item.linkgithub} className={styles.ngang} target="_blank" rel="noopener noreferrer" >
            <p className={styles.toeic}>
            {item.copanyname}
            <img className={styles.imglinktoeic}  src="/external-link.png" alt="Description 3" />
            </p>
            </a>
            <div className={styles.text_context_time}> {item.time} </div>
           
          
            
          </div>
          <div className={styles.divngang}>
              <p className={styles.Utilized}>Team members:     </p>
              <p className={styles.textuti}> {item.teammembers}   </p>
              </div>
          <div className={styles.text}>
          {item.text}
            </div>
            <div className={styles.divngang}>
              
              <p className={styles.text}><span className={styles.tag}>Responsibility:</span> {item.Responsibility}   </p>
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
