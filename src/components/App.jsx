import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

import styles from './styles.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setSelectedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      <Button onClick={loadMoreImages} hasMore={images.length > 0} />

      {selectedImageUrl && (
        <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
