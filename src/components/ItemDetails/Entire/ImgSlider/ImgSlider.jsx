import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import PropTypes from 'prop-types';

const ImgSlider = ({ data }) => {
  const images = data.entires;
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}
    >
      <Slider>
        {images.map(item => (
          <Slide key={item.id}>
            <img
              src={item.imgDesk}
              alt={data.alt}
              srcSet={`${item.imgDesk} 585w, ${item.imgDesk2x} 1170w`}
              sizes="(min-width:1280px) 585px, 100vw"
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

// ImgSlider.propTypes = {
//   data: PropTypes.objectOf(PropTypes.exact({})),
// };

export default ImgSlider;
