import PropTypes from 'prop-types';
import { Svg } from './HeaderLinks.styled';

const HeaderLinksSvgSelector = ({ id }) => {
  switch (id) {
    case 'small_phone':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            d="M8.488 4.57c.553.613.378 1.309-.112 1.969-.116.156-.25.31-.411.48-.078.082-.139.143-.265.27l-.725.725c-.095.095.553 1.39 1.812 2.65 1.257 1.258 2.552 1.906 2.648 1.811l.724-.725c.399-.399.61-.591.9-.782.604-.396 1.262-.503 1.817-.007 1.812 1.296 2.838 2.092 3.34 2.614.98 1.018.852 2.585.006 3.48-.293.31-.665.682-1.105 1.105C14.46 20.82 8.851 19.2 4.553 14.9c-4.3-4.304-5.917-9.912-3.265-12.565.476-.484.633-.64 1.097-1.098.863-.85 2.503-.983 3.5.001.524.518 1.36 1.593 2.603 3.332Zm5.007 8.517-.724.725c-1.232 1.232-3.329-.41-5.32-2.403-1.994-1.995-3.043-3.5-1.811-4.732l.724-.725.232-.236c.087-.091.158-.171.215-.242-1.102-1.534-1.85-2.493-2.254-2.892-.209-.206-.675-.168-.847.001-.457.45-.607.6-1.081 1.082-1.706 1.706-.65 6.484 3.01 10.147 3.66 3.662 8.436 4.719 10.155 3 .432-.418.785-.77 1.056-1.057.196-.207.23-.635.005-.869-.375-.39-1.295-1.107-2.882-2.247a6.473 6.473 0 0 0-.478.448Z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'phone':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="none"
        >
          <path d="M14.367 6.808c.938 1.039.64 2.216-.189 3.333a8.717 8.717 0 0 1-.697.813c-.13.138-.233.242-.447.457l-1.227 1.227c-.161.16.936 2.353 3.066 4.485 2.128 2.13 4.321 3.228 4.482 3.066l1.226-1.226c.676-.676 1.033-1.002 1.524-1.324 1.022-.67 2.136-.852 3.075-.012 3.068 2.194 4.804 3.54 5.655 4.424 1.659 1.724 1.441 4.377.01 5.89a59.32 59.32 0 0 1-1.87 1.872c-4.5 4.5-13.993 1.761-21.269-5.521C.428 17.008-2.309 7.514 2.18 3.023c.806-.818 1.071-1.084 1.856-1.857C5.498-.274 8.273-.5 9.961 1.167c.887.877 2.302 2.697 4.406 5.64Zm8.476 14.417-1.226 1.227c-2.084 2.085-5.634-.692-9.006-4.067-3.374-3.378-5.15-5.926-3.065-8.01l1.226-1.226c.196-.197.285-.288.393-.4.147-.155.267-.29.364-.41-1.865-2.597-3.132-4.22-3.815-4.895-.353-.349-1.144-.284-1.434.001-.773.763-1.028 1.017-1.83 1.832-2.887 2.888-1.1 10.974 5.096 17.175 6.193 6.199 14.279 7.987 17.188 5.078a57.088 57.088 0 0 0 1.788-1.789c.332-.35.39-1.074.01-1.47-.637-.66-2.193-1.874-4.88-3.804-.196.158-.437.386-.809.758Z" />
        </Svg>
      );
    case 'small_cart':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <g
            
            stroke-width=".591"
            clip-path="url(#a)"
          >
            <path d="M7.699 17.68a1.477 1.477 0 1 1-2.954 0 1.477 1.477 0 0 1 2.954 0ZM19.514 17.68a1.477 1.477 0 1 1-2.954 0 1.477 1.477 0 0 1 2.954 0ZM5.336 2.91v.296H19.514v6.54L4.404 12.06l-.25.039v.265c0 .816.661 1.477 1.477 1.477h13.883v.591H5.631a2.068 2.068 0 0 1-1.291-3.682l.128-.102-.02-.163-.887-7.607-.03-.261H1.2v-.591h3.25c.49 0 .886.396.886.886Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M.905.548H19.81v18.905H.905z" />
            </clipPath>
          </defs>
        </Svg>
      );
    case 'cart':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="none"
        >
          <path d="M11.5 29a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM31.5 29a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM7.5 4v.5h24v11.07L5.924 19.487l-.424.065V20A2.5 2.5 0 0 0 8 22.5h23.5v1H8a3.5 3.5 0 0 1-2.185-6.233l.216-.173-.032-.275L4.497 3.942 4.445 3.5H.5v-1H6A1.5 1.5 0 0 1 7.5 4Z" />
        </Svg>
      );
    default:
      return <svg></svg>;
  }
};

HeaderLinksSvgSelector.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HeaderLinksSvgSelector;
