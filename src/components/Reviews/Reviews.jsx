import Slider from "./Slider/Slider"
import { reviews } from "data/reviews"
import { Container, Section, Title } from "./Reviews.styled"

const Reviews = () => {
    return (
        <Section>
            <Container>
                <Title>Відгуки</Title>
                <Slider reviews={reviews}/>
            </Container>
            </Section>
        )
}

export default Reviews