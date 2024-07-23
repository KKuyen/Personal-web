
import styles from './Projects_tab.module.css';
import Summary from '../context/Projects_context';
import Sun from '../context/Mercury_context';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
interface Function2Props {
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const Function6: React.FC<Function2Props> = ({ setActiveLink }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setActiveLink('/Projects');
  }, [setActiveLink]);
  const [isFirstColor, setIsFirstColor] = React.useState(true);

    const back1="luto";
    const back2="rojects";
    const front1="";
    const front2="";
    const mid='P';
    const maincolor="#A57BFD";
  const changeBackground = () => {
    const element = document.querySelector(`.${styles.anhsang21}`) as HTMLElement;
    const sunElement = document.querySelector(`.${styles.theSun}`) as HTMLElement;
    const back =document.querySelector(`.${styles.backButton}`) as HTMLElement;
    const nameTag = document.querySelector(`.${styles.nameTag}`) as HTMLElement;
    const summaryTag = document.querySelector(`.${styles.tag}`) as HTMLElement; 
    const VTag = document.querySelector(`.${styles.tag3}`) as HTMLElement;// Lấy element chứa chữ "ummary"
    const Ftag =document.querySelector(`.${styles.ftag}`) as HTMLElement;
    
    if (element) {
      
      if (isFirstColor) {
        summaryTag.textContent = back2;
        VTag.textContent=front2;
        VTag.animate([
          { transform: 'translateX(+100%)' },
          { transform: 'translateX(0%)' }
        ], {
          duration: 200, // 1 giây
          fill: 'forwards'
        });
        VTag.animate([
          { opacity: 0 },
          { opacity: 1 }
        ], {
          duration: 200, // 0.5 giây
          fill: 'forwards' // Giữ trạng thái cuối cùng của animation
        });
        // Đặt màu nền sang màu thứ hai
        

        // Tạo animation di chuyển từ trái qua
        summaryTag.animate([
          { transform: 'translateX(-100%)' , color: 'white'},
          { transform: 'translateX(0%)', color: maincolor }
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
            { transform: 'translateX(-75%) translateY(0vh) ', height: '90vh', width: '90vh' },
            { transform: 'translateX(+11.5vh) translateY(2vh)', height: '35vh', width: '35vh' }
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
    const VTag = document.querySelector(`.${styles.tag3}`) as HTMLElement;// Lấy element chứa chữ "ummary"
    const Ftag =document.querySelector(`.${styles.ftag}`) as HTMLElement;
    

    if (element) {
      
    

      summaryTag.textContent = back1;
      VTag.textContent=front1;
      VTag.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 200, // 0.5 giây
        fill: 'forwards' // Giữ trạng thái cuối cùng của animation
      }); 
      // Tạo animation di chuyển từ trái qua
      summaryTag.animate([
        { transform: 'translateX(+100%)',color: maincolor },
        { transform: 'translateX(0%)', color: 'white' }
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
           
            { transform: 'translateX(+11.5vh) translateY(2vh)', height: '35vh', width: '35vh' },
            { transform: 'translateX(-75%) translateY(0vh)', height: '90vh', width: '90vh' }
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
      
        <p className={styles.nameTag}>"Pluto"</p>

        <div className={styles.backButton} onClick={changeBackgroundDefault}>
          <img className={styles.backImg} src="/arrow.png" alt="backButton" />

          <p className={styles.backTxt}>Back</p>
       
        </div>
       
      </div>
        <div className={styles.anhsang21}>
          <div className={styles.ftag} >
          <p className={styles.tag3}  ></p>
          <p className={styles.tag2}  >{mid}</p>
          <p className={styles.tag}  >{back1}</p>
        
          </div>
       
      
       
        
     
          <div onClick={changeBackground} className={styles.theSun}>
    
           

          </div>
         
      
    
        </div>
      </div>
    </>
  );
}

export default Function6