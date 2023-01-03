import BurgerIconSvgSelector from "./BurgerIconSvgSelector"
import PropTypes from 'prop-types';
import { Button } from "./BurgerIcon.styled";

const BurgerIcon = ({ id }) => {
    
    const handleClick = () => {
        
    }
    return (
        <Button type="button" onClick={handleClick}>
            <BurgerIconSvgSelector id={id} />
        </Button>
    )
}

BurgerIcon.propTypes = {
    id:PropTypes.string.isRequired,
}

export default BurgerIcon