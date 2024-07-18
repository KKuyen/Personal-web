  import React from 'react';
  import styles from './Function1.module.css';

  const Function2: React.FC = () => {
    const [isFirstColor, setIsFirstColor] = React.useState(true);
    const changeBackground = () => {
      const element = document.querySelector(`.${styles.anhsang21}`) as HTMLElement;
      const sunElement = document.querySelector(`.${styles.theSun}`) as HTMLElement;
      const back =document.querySelector(`.${styles.backButton}`) as HTMLElement;
      const nameTag = document.querySelector(`.${styles.nameTag}`) as HTMLElement;
      if (element) {
       
        if (isFirstColor) {
          // Đặt màu nền sang màu thứ hai
        
          nameTag.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            duration: 500, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          // Kích hoạt animation cho sunElement
          if (sunElement) {
            sunElement.animate([
              { transform: 'translateX(-100%)', height: '90vh', width: '90vh' },
              { transform: 'translateX(-120%)', height: '35vh', width: '35vh' }
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
      if (element) {
       
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
             
              { transform: 'translateX(-120%)', height: '35vh', width: '35vh' },
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
          <p className={styles.nameTag}>"Sun"</p>

          <div className={styles.backButton} onClick={changeBackgroundDefault}>
            <img className={styles.backImg} src="/arrow.png" alt="backButton" />

            <p className={styles.backTxt}>Back</p>
         
          </div>
         
        </div>
          <div className={styles.anhsang21}>
          <p className={styles.tag}  >Summary</p>
        
         
          
       
            <div onClick={changeBackground} className={styles.theSun}>
      
             

            </div>
           
        
      
          </div>
        </div>
      </>
    );
  }

  export default Function2;