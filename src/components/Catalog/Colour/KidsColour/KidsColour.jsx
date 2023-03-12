import ColourList from "../ColourList/ColourList"
import { colourKids } from "data/catalog/colour"
import { Container, Subtitle, Button } from "./KidsColour.styled"
import ColourSvgSelector from "../ColourSvgSelector"
import { useState } from "react"
const KidsColour = () => {
    const [className, setClassName] = useState('close')

    const handleClick = () => {
        setClassName('open')
        if (className === 'open') {
            setClassName('close')
        }
    }
    return (
        <div>
            <Container>
                <Subtitle>Кольори для дитячих пледів </Subtitle>
                <Button type="button" onClick={handleClick}>
                    <ColourSvgSelector id={"arrow-menu"} />
                </Button>
            </Container>
            <ColourList data={colourKids} type={className}/>
        </div>
    )
}

export default KidsColour