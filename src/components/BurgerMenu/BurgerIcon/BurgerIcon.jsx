import BurgerIconSvgSelector from "./BurgerIconSvgSelector"
import PropTypes from 'prop-types';
import { Button } from "./BurgerIcon.styled";

const BurgerIcon = ({ id, onClick}) => {
    return (
        <Button type="button" onClick={onClick}>
            <BurgerIconSvgSelector id={id} />
        </Button>
    )
}

BurgerIcon.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default BurgerIcon