import React from 'react';
import ReactDOM from 'react-dom';
import ImageCarouselComponent from './components/ImageCarouselComponent.jsx';

const headerDiv = document.getElementById('images_header');
ReactDOM.render(<ImageCarouselComponent />, headerDiv);

export default ImageCarouselComponent;
