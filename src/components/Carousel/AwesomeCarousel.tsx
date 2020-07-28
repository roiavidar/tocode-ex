import React, { CSSProperties } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function AwesomeCarousel(props: {
    children: JSX.Element[],
    transitionTime: number,
    style: CSSProperties
}) {
    const {transitionTime, style} = props;

    return (
        <div style={style}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={transitionTime}
                showThumbs={false}
                dynamicHeight={true}>
                {props.children}
            </Carousel>
        </div>
    )
}

AwesomeCarousel.defaultProps = {
    transitionTime: 1000
}