import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import styles from './styles.module.css';

const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li key={image.id} className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        onClick={openModal}
      />

      {isModalOpen && (
        <Modal imageUrl={image.largeImageURL} onClose={closeModal} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
