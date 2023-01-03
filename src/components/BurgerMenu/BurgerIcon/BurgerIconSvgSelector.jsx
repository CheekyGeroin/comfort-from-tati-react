import PropTypes from 'prop-types';
import { Svg } from './BurgerIcon.styled';

const BurgerIconSvgSelector = ({ id }) => {
  switch (id) {
    case 'open':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="14"
          fill="none"
        >
          <rect width="35" height="2" fill="#F6F7F1" rx="1" />
          <rect width="27" height="2" y="6" fill="#F6F7F1" rx="1" />
          <rect width="16" height="2" y="12" fill="#F6F7F1" rx="1" />
        </Svg>
      );
    case 'close':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="14"
          fill="none"
        >
          <rect
            width="35"
            height="2"
            fill="#F6F7F1"
            rx="1"
            transform="matrix(-1 0 0 1 35.81 0)"
          />
          <rect
            width="27"
            height="2"
            fill="#F6F7F1"
            rx="1"
            transform="matrix(-1 0 0 1 35.81 6)"
          />
          <rect
            width="16"
            height="2"
            fill="#F6F7F1"
            rx="1"
            transform="matrix(-1 0 0 1 35.81 12)"
          />
        </Svg>
      );
    default:
      return <svg></svg>;
  }
};

BurgerIconSvgSelector.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BurgerIconSvgSelector;
