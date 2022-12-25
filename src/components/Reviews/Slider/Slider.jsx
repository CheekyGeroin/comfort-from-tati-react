import { useState } from "react"
import PropTypes from 'prop-types';
import {ReactComponent as Arrow} from 'images/icons/arrow.svg'
import { LeftArrow, Name,Text, RightArrow, Slide, TextContainer, Wrapper } from "./Slider.styled";

const Slider = ({reviews}) => {
    const [slide, setSlide] = useState(0);
    const [currentTimer, setCurrentTimer] = useState();
    
    const DURATION = 300;
    const handleClick = (move) => {
        const timer = setTimeout(() => {
            setSlide((s)=>s + move)
        }, DURATION)
        clearTimeout(currentTimer);
        setCurrentTimer(timer)
    }

    return (
        <Wrapper>
            <Slide>
                <TextContainer>
                    <Name>{reviews[slide].name}</Name>
                    <Text>{reviews[slide].text}</Text>
                </TextContainer>
            </Slide>
            {slide > 0 && <LeftArrow onClick={() => handleClick(-1)}>
                <Arrow/>
            </LeftArrow>}
            {slide< reviews.length - 1 &&<RightArrow onClick={() => handleClick(1)}>
                <Arrow/>
            </RightArrow>}
        </Wrapper>
    )
}

Slider.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
        })
    )
}



export default Slider