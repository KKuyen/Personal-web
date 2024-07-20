import { Link } from 'react-router-dom'; // Import Link


import styles from './Function1.module.css';
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
  return  <div className={styles.function6Container}></div>
}

export default Function6;