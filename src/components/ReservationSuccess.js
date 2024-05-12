import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReservationSuccess.module.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useEffect } from 'react';

function ReservationSuccess() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles['icon-container']}>
        <CheckCircleOutlineOutlinedIcon className={styles.icon} />
      </div>
        <h2 className={styles['karla-bold']}>Reservation successful!</h2>
        <p className={styles['karla-medium']}>Congratulations! Your reservation has been made.</p>
      </div>
      <Link to='/' className={`${styles['karla-extra-bold']} ${styles.btn}`}>Home</Link>
    </>
  )
}

export default ReservationSuccess