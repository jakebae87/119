import React, { useState, useEffect, useRef } from 'react';

import prom_img1 from '../../assets/Images/prom_img1.jpg';
import prom_img2 from '../../assets/Images/prom_img2.jpg';
import prom_img3 from '../../assets/Images/prom_img3.jpg';
import prom_img4 from '../../assets/Images/prom_img4.jpg';
import prom_img5 from '../../assets/Images/prom_img5.jpg';

const ImageSlider = () => {
    const images = [
        prom_img1,
        prom_img2,
        prom_img3,
        prom_img4,
        prom_img5,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slideContainerRef = useRef(null);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 3000);

        return () => {
            clearInterval(slideTimer);
        };
    }, [isHovered]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="slide_container"
            ref={slideContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="slide_list">
                {images.map((image, index) => (
                    <li
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        style={{
                            transform: `translateX(${100 * (index - (currentIndex + 1))
                                }%)`,
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    >
                        <img src={image} alt={`bg${index + 1}`} />
                    </li>
                ))}
            </ul>

            <div className="pageOfPages">
                <a href="/eventboard">
                    {currentIndex + 1} / {images.length}
                </a>
            </div>
            <div className="pager">
                {images.map((_, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        key={index}
                        href="#"
                        className={currentIndex === index ? 'active' : ''}
                        onClick={() => goToSlide(index)}
                    >
                        /
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
