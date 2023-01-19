import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import PropTypes from 'prop-types';

const ImgSlider = ({ data }) => {
    console.log(data)
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
        <Slide index={3}>I am the fourth Slide.</Slide>
      </Slider>
    </CarouselProvider>
  );
};

// ImgSlider.propTypes = {
//   data: PropTypes.objectOf(PropTypes.exact({})),
// };

export default ImgSlider