import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Button = ({ onClick, hasMore }) => {
  return (
    <>
      {hasMore && (
        <div className={styles.ButtonLoadPosition}>
          <button className={styles.ButtonLoad} onClick={onClick}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Button;
