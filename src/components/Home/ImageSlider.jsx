import './ImageSlider.css'; // 이미지 슬라이더 스타일링을 위한 CSS 파일을 임포트하세요.
import React, { useState, useEffect } from 'react';

// 이미지
import prom_img1 from '../../assets/Images/prom_img1.jpg';
import prom_img2 from '../../assets/Images/prom_img2.jpg';
import prom_img3 from '../../assets/Images/prom_img3.jpg';
import prom_img4 from '../../assets/Images/prom_img4.jpg';
import prom_img5 from '../../assets/Images/prom_img5.jpg';

const images = [
    prom_img1,
    prom_img2,
    prom_img3,
    prom_img4,
    prom_img5
];

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ImageSlider">
            <div className="slider-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slider-image ${index === currentImageIndex ? 'active' : ''
                            }`}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}

                <div className="slider-controls">
                    <button className="prev-button" onClick={prevImage}>
                        &#x2039;
                    </button>
                    <div className="dots">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => goToImage(index)}
                            />
                        ))}
                    </div>
                    <button className="next-button" onClick={nextImage}>
                        &#x203a;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;