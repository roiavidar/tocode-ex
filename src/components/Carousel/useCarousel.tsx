import { useState, useEffect } from "react";

export function useCarousel(startSlideIndex: number, totalSlides: number, nextSlideTimeout: number): [number, () => void, () => void , (slideIndex: number) => void] {
    const [currentSlideIndex , setCurentSlideIndex] = useState(startSlideIndex);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setNextSlide();
        }, nextSlideTimeout);

        return function() {
            clearTimeout(timer);
        }
    }, [currentSlideIndex])

    function setNextSlide() {
        if (currentSlideIndex === totalSlides - 1) {
            setCurentSlideIndex(0)
        } else {
            setCurentSlideIndex(currentSlideIndex + 1);
        }
    }

    function setPrevSlide() {
        if (currentSlideIndex === 0) {
            setCurentSlideIndex(totalSlides - 1);
        } else {
            setCurentSlideIndex(currentSlideIndex - 1);
        }
    }

    function setSlide(slideIndex: number) {
        setCurentSlideIndex(slideIndex);
    }

    return [currentSlideIndex, setNextSlide, setPrevSlide, setSlide];
}