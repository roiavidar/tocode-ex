import { useCarousel } from "./useCarousel";
import React, { CSSProperties } from "react";

export function withCarousel(Component: (props: any) => JSX.Element) {
    function WithCarousel(props: {
        startSlideIndex: number,
        nextImageTimout: number,
        style: CSSProperties,
        children: JSX.Element[]
    }) {
        const { startSlideIndex, nextImageTimout, style } = props;
        const [currentIndex, setNextSlide, setPrevSlide] = useCarousel(startSlideIndex, React.Children.count(props.children), nextImageTimout);

        return (
            <Component 
                {...props} 
                currentSlideIndex={currentIndex}
                style={style}
                setNextSlide={setNextSlide}
                setPrevSlide={setPrevSlide} />
        )
    }

    WithCarousel.defaultProps = {
        startSlideIndex: 0,
        nextImageTimout: 5000
    }

    return WithCarousel;
}