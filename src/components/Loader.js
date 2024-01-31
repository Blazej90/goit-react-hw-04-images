import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <RotatingSquare
        color="#3f51b5"
        height={100}
        width={100}
        visible={true}
        ariaLabel="rotating-square-loading"
      />
    </div>
  );
};

export default Loader;
