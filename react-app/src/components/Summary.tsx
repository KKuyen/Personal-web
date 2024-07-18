  import React from 'react';
  import styles from './Function1.module.css';

  const Function2: React.FC = () => {
    const [isFirstColor, setIsFirstColor] = React.useState(true);
    const changeBackground = () => {
      const element = document.querySelector(`.${styles.anhsang21}`) as HTMLElement;
      const sunElement = document.querySelector(`.${styles.theSun}`) as HTMLElement;
      if (element) {
       
        if (isFirstColor) {
          // Đặt màu nền sang màu thứ hai
        
          element.animate([
            { background: 'linear-gradient(90deg, rgba(255, 137, 0, 0.3) 0%, rgba(34, 22, 10, 0.2) 47.16%, rgba(22, 21, 21, 0.2) 84.67%)' },
            { background: 'linear-gradient(90deg, rgba(255, 137, 0, 0.4) 0%, rgba(34, 22, 10, 0.2) 63.67%, rgba(22, 21, 21, 0.2) 84.67%)' }
          ], {
            duration: 500, // 0.5 giây
            fill: 'forwards' // Giữ trạng thái cuối cùng của animation
          });
          // Kích hoạt animation cho sunElement
          if (sunElement) {
            sunElement.animate([
              { transform: 'translateX(-100%)', height: '90vh', width: '90vh' },
              { transform: 'translateX(-140%)', height: '35vh', width: '35vh' }
            ], {
              duration: 500, // 0.5 giây
              fill: 'forwards' // Giữ trạng thái cuối cùng của animation
            });
          }
          setIsFirstColor(!isFirstColor);
        } 
        // Đảo trạng thái màu nền
    
      }
    };

    return (
      <>
        <div className={styles.function2Container}>
          <div className={styles.anhsang21}>

            <div onClick={changeBackground} className={styles.theSun}>

            </div>
        
      
          </div>
        </div>
      </>
    );
  }

  export default Function2;