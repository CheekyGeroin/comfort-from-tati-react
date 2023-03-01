import { useBasket } from "utils/basketContext"
import { BasketList,BasketListItem, BasketTitle, Container, ListContainer, TitleContainer } from "./Basket.styled"
import BasketItem from "./BasketItem/BasketItem"

const Basket = () => {
    const {basketItem} = useBasket()
    
    return (
        <Container>
            <TitleContainer>
                <BasketTitle>Кошик</BasketTitle>
            </TitleContainer>

            <ListContainer>
                <BasketList>
                    {basketItem.map(item =>
                        <BasketListItem key={item.id}>
                            <BasketItem item={item} />
                        </BasketListItem>
                    )}
                </BasketList>
            </ListContainer>
        </Container>
    )
}

export default Basket