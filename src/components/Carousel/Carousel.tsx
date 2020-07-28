import React, { CSSProperties } from 'react';
import { withCarousel } from './withCarousel';

export function Carousel(props: {
    currentSlideIndex: number,
    setNextSlide: () => void,
    setPrevSlide: () => void,
    style: CSSProperties,
    children: JSX.Element[]
}) {
    const { currentSlideIndex, setNextSlide, setPrevSlide, style } = props;
    
    return (
        <div>
            {React.cloneElement(props.children[currentSlideIndex], {style})}
            <div>
                <button onClick={setPrevSlide}>Prev</button>
                <button onClick={setNextSlide}>Next</button>
            </div>
        </div>
    )
}

export default withCarousel(Carousel);