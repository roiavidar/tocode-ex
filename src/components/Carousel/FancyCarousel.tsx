import React, { CSSProperties } from 'react';
import { useCarousel } from './useCarousel';
const slideStyle = {
    margin: 'auto'
}

export default function FancyCarousel(props: {
    carouselId: string
    currentSlideIndex: number,
    style: CSSProperties,
    nextSlideTimeout: number,
    children: JSX.Element[]
}) {
    const { currentSlideIndex, carouselId, style, nextSlideTimeout } = props;
    const [activeSlide, setNextSlide, setPrevSlide, setActiveSlide] = useCarousel(currentSlideIndex, React.Children.count(props.children), nextSlideTimeout);

    function renderCarouselIndicators() {
        return (
                React.Children.map(props.children, (child: JSX.Element, index: number) => (
                    <li 
                        key={index}
                        data-target={`#${carouselId}`} 
                        data-slide-to={`${index}`} 
                        className={getActiveClass(index)}
                        onClick={() => {onSetActiveItemHandler(index)}}>
                    </li>
                ))
        )
    }

    function renderCarouselItems() {
        return (
            React.Children.map(props.children, (child: JSX.Element, index: number) => (
                <div className={`${getActiveClass(index)} item`}>
                    {React.cloneElement(child, { style: getSlideStyle()})}
                </div>
            ))
        )
    }

    function getSlideStyle() {
        return {
            ...slideStyle,
            ...{
                height: style.height || ''
            }
        }
    }

    function getActiveClass(index: number) {
        return index === activeSlide ? "active" : ''
    }

    function onSetActiveItemHandler(index: number) {
        setActiveSlide(index);
    }

    return (
        <div id={carouselId} className="carousel slide" data-ride="carousel" style={style}>
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
                {renderCarouselIndicators()}
            </ol>

            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
                {renderCarouselItems()}
            </div>

            {/* <!-- Left and right controls --> */}
            <a className="left carousel-control" href={`#${carouselId}`} data-slide="prev" onClick={() => {setPrevSlide()}}>
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href={`#${carouselId}`} data-slide="next" onClick={() => {setNextSlide()}}>
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

FancyCarousel.defaultProps = {
    currentSlideIndex: 0,
    nextSlideTimeout: 4000
}