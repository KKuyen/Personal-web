  import React from 'react';
  import styles from './Function1.module.css';
  import Summary from '../context/Summary_context';
  import Sun from '../context/Sun_context';

  const Function2: React.FC = () => {
    const [isFirstColor, setIsFirstColor] = React.useState(true);
    const changeBackground = () => {
      const element = document.querySelector(`.${styles.anhsang21}`) as HTMLElement;
      const sunElement = document.querySelector(`.${styles.theSun}`) as HTMLElement;
      const back =document.querySelector(`.${styles.backButton}`) as HTMLElement;
      const nameTag = document.querySelector(`.${styles.nameTag}`) as HTMLElement;
      const summaryTag = document.querySelector(`.${styles.tag}`) as HTMLElement; // Lấy element chứa chữ "ummary"
      if (element) {
       
        if (isFirstColor) {
          summaryTag.textContent = "un";

          // Tạo animation di chuyển từ trái qua
          summaryTag.animate([
            { transform: 'translateX(-100%)',color:'white' },
            { transform: 'translateX(0%)',color:'#FF8900' }
          ], {
            duration: 200, // 1 giây
            fill: 'forwards'
          });
          summaryTag.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 200, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          // Đặt màu nền sang màu thứ hai
        
          nameTag.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 1000, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          // Kích hoạt animation cho sunElement
          if (sunElement) {
            sunElement.animate([
              { transform: 'translateX(-100%)', height: '90vh', width: '90vh' },
              { transform: 'translateX(-150%)', height: '35vh', width: '35vh' }
            ], {
              duration: 500, // 0.5 giây
              fill: 'forwards' // Giữ trạng thái cuối cùng của animation
            });
          }
          back.animate([
            { transform: 'translateX(-200%)'  },
            { transform: 'translateX(0%)' }
          ], {
            duration: 500, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          
          setIsFirstColor(!isFirstColor);
        } 
        // Đảo trạng thái màu nền
    
      }
    };
    const changeBackgroundDefault = () => {
      const element = document.querySelector(`.${styles.anhsang21}`) as HTMLElement;
      const sunElement = document.querySelector(`.${styles.theSun}`) as HTMLElement;
      const back =document.querySelector(`.${styles.backButton}`) as HTMLElement;
      const nameTag = document.querySelector(`.${styles.nameTag}`) as HTMLElement;
      const summaryTag = document.querySelector(`.${styles.tag}`) as HTMLElement; 

      if (element) {
       
        summaryTag.textContent = "ummary";

        // Tạo animation di chuyển từ trái qua
        summaryTag.animate([
          { transform: 'translateX(+100%)', color:'#FF8900' },
          { transform: 'translateX(0%)', color:'white' }
        ], {
          duration: 200, // 1 giây
          fill: 'forwards'
        });
        summaryTag.animate([
          { opacity: 0 },
          { opacity: 1 }
        ], {
          duration: 200, // 0.5 giây
          fill: 'forwards' // Giữ trạng thái cuối cùng của animation
        });       
        if (!isFirstColor) {
       
          //ẩn hiện nametag
          nameTag.animate([
            { opacity: 1 },
            { opacity: 0}
          ], {
            duration: 500, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          
          // Kích hoạt animation cho sunElement
          if (sunElement) {
            sunElement.animate([
             
              { transform: 'translateX(-150%)', height: '35vh', width: '35vh' },
              { transform: 'translateX(-100%)', height: '90vh', width: '90vh' }
            ], {
              duration: 500, // 0.5 giây
              fill: 'forwards' // Giữ trạng thái cuối cùng của animation
            });
          }
          back.animate([
            { transform: 'translateX(0%)'  },
            { transform: 'translateX(-200%)' }
          ], {
            duration: 500, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          setIsFirstColor(!isFirstColor);
        } 
        // Đảo trạng thái màu nền
    
      }
    };

    return (
      <>
        <div className={styles.function2Container}>
      
        <div className={styles.rectangle}> 
           
        {isFirstColor ? (
  // Component được hiển thị khi isFirstColor là true
     <div className={styles.context}> 
    <Summary />
      </div>
) : (
  // Component được hiển thị khi isFirstColor là false
     <div className={styles.context}> 
    <Sun />
     </div>
)}
        
          <p className={styles.nameTag}></p>

          <div className={styles.backButton} onClick={changeBackgroundDefault}>
            <img className={styles.backImg} src="/arrow.png" alt="backButton" />

            <p className={styles.backTxt}>Back</p>
         
          </div>
         
        </div>
          <div className={styles.anhsang21}>
            <div className={styles.ftag} >
            <p className={styles.tag2}  >S</p>
            <p className={styles.tag}  >ummary</p>
            </div>
         
        
         
          
       
            <div onClick={changeBackground} className={styles.theSun}>
      
             

            </div>
           
        
      
          </div>
        </div>
      </>
    );
  }

  export default Function2;