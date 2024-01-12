import  { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

import './../style.module.scss';

interface CarouselSlide {
  class: string;
  element: JSX.Element;
}

interface CarouselProps {
  slides: JSX.Element[];
  autoplay?: boolean;
  interval?: number;
  arrows?: boolean;
  arrowBorders?: boolean;
  onSlideChange?: (slideIndex: number) => void;
}

export function Carousel(props: CarouselProps): JSX.Element {
  const [/* slideTotal */, setSlideTotal] = useState(0);
  const [slideCurrent, setSlideCurrent] = useState(-1);
  const [slides, setSlides] = useState<CarouselSlide[]>([]);
  const [height, /* setHeight */] = useState('0px');
  const intervalRef = useRef<number | null>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    trackMouse: true,
  });

  useEffect(() => {
    const locSlides = props.slides.map((slide) => ({
      class: 'slider-single proactivede',
      element: slide,
    }));

    if (props.slides.length === 2) {
      props.slides.forEach((slide) => {
        const slideobject = {
          class: 'slider-single proactivede',
          element: slide,
        };
        locSlides.push(slideobject);
      });
    }

    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);

    if (slideCurrent === -1) {
      setTimeout(() => {
        if (nextRef.current) {
          nextRef.current.click();
          if (props.autoplay) {
            intervalRef.current = window.setTimeout(() => {
              if (nextRef.current) {
                nextRef.current.click();
              }
            }, props.interval || 3000);
          }
        }
      }, 500);
    }
  }, [props.slides, slideCurrent, props.autoplay, props.interval]);

  useEffect(() => {
    if (slideCurrent === -1) {
      setTimeout(() => {
        // slideRight();
      }, 500);
    }
  }, [slides, slideCurrent]);

  const slideRight = () => {
    // ... (rest of the code remains unchanged)
  };

  const slideLeft = () => {
    // ... (rest of the code remains unchanged)
  };

  const sliderClass = (direction: 'left' | 'right') => {
    let sliderClass = `slider-${direction}`;
    if (!props.arrows) {
      sliderClass = 'slider-disabled';
    } else if (props.arrows && !props.arrowBorders) {
      sliderClass = `slider-${direction}-noborders`;
    }
    return sliderClass;
  };

  return (
    <div className="react-3d-carousel" style={{ height }} {...handlers}>
      {slides && slides.length > 0 && (
        <div className="slider-container">
          <div className="slider-content">
            {slides.map((slider, index) => (
              <div className={slider.class} key={index}>
                <div className={sliderClass('left')} onClick={slideLeft}>
                  <div>
                    <i className="fa fa-arrow-left"></i>
                  </div>
                </div>
                <div className={sliderClass('right')} onClick={slideRight} ref={nextRef}>
                  <div>
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </div>
                <div className="slider-single-content">{slider.element}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange: PropTypes.func,
};

Carousel.defaultProps = {
  autoplay: false,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
  onSlideChange: () => {},
};