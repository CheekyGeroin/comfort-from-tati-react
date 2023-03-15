import { Svg, SvgMenu } from './Individual.styled';
import PropTypes from 'prop-types';

const IndividualSvgSelector = ({ id }) => {
  switch (id) {
    case 'arrow':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#074050"
            fillRule="evenodd"
            d="M.44 13.06a1.5 1.5 0 0 1 0-2.12l9.545-9.547a1.5 1.5 0 0 1 2.122 2.122L5.12 10.5H78.5a1.5 1.5 0 0 1 0 3H5.121l6.986 6.985a1.5 1.5 0 1 1-2.122 2.122L.44 13.06Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'arrow-menu':
      return (
        <SvgMenu
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="28"
        fill="none"
      >
        <path
          fill="#074050"
          d="M44.15 0 47 3.019 23.5 28 0 3.019 2.835 0 23.5 21.948 44.15 0Z"
        />
      </SvgMenu>
      );

    default:
      return <svg></svg>;
  }
};

IndividualSvgSelector.propTypes = {
  id: PropTypes.string.isRequired,
};

export default IndividualSvgSelector;
