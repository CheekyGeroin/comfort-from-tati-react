import PropTypes from 'prop-types';
import { Svg } from './Colour.styled';

const ColourSvgSelector = ({ id }) => {
  switch (id) {
    case 'arrow-menu':
      return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="28"
        fill="none"
      >
        <path
          fill="#074050"
          d="M44.15 0 47 3.019 23.5 28 0 3.019 2.835 0 23.5 21.948 44.15 0Z"
        />
      </Svg>
      );
    default:
      return <svg></svg>;
  }
};

ColourSvgSelector.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ColourSvgSelector;
