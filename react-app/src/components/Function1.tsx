// components/Function1.tsx
import { Link } from 'react-router-dom'; // Import Link

import React from 'react';
import styles from './Function1.module.css';

const Function1: React.FC = () => {
  return (
    <>
  
      <div className={styles.function1Container}>
        <div className={styles.anhsang}>
          {/* Bọc hình ảnh bằng Link và chỉ định đường dẫn tới Function2 */}
          <Link to="/Summary" title='Summary'>
            <img className={styles.images} draggable="false" src="/sunHalf.png" alt="Sun Half" />
          </Link>
          <Link to="/Experience" title='Experience'>
          <img className={styles.Mercury} draggable="false" src="/Mercury.png" alt="Mercury" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Function1;