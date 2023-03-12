import ColourList from "../ColourList/ColourList"
import { colourPlaid } from "data/catalog/colour"
import { Button, Container, Subtitle } from "./PlaidColour.styled"
import ColourSvgSelector from "../ColourSvgSelector"
import { useState } from "react"
const PlaidColour = () => {
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
                <Subtitle>Кольори для пледів всіх розмірів</Subtitle>
                <Button type="button" onClick={handleClick}>
                    <ColourSvgSelector id={"arrow-menu"} />
                </Button>
            </Container>
            <ColourList data={colourPlaid} type={className} />
        </div>
    )
}

export default PlaidColour