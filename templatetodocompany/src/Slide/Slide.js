import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./ImageGalery.css";
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
    render() {
       
        const images = [
            {
                original: '../../assets/Slide/slide1.jpg',
            },
            {
                original: '../../assets/Slide/slide2.jpg',
            },
            {
                original: '../../assets/Slide/slide3.jpg',
                
            },
            {
                original: '../../assets/Slide/slide4.jpg',
                
            },

            
        ]
        return (
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}