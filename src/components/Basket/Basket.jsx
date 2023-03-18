
import { useBasket } from "utils/basketContext"
import { BasketList,BasketListItem, BasketTitle, Container, ListContainer, TitleContainer } from "./Basket.styled"
import BasketItem from "./BasketItem/BasketItem"

const Basket = () => {
    const { basketItem } = useBasket()
    const basketLength = basketItem.length - 1;

    console.log(basketLength)
    console.log(basketItem.length)

    


       return (
        <Container>
            <TitleContainer>
                <BasketTitle>Кошик</BasketTitle>
            </TitleContainer>

            {basketItem.length >= 1 && <ListContainer>
                <BasketList>
                    {basketItem.map(item =>
                        <BasketListItem key={item.id}>
                            <BasketItem item={item} />
                        </BasketListItem>
                    )}
                </BasketList>
            </ListContainer>}
            {basketItem.length === 0 && <ListContainer>
                <BasketList>
                    {basketItem.map(item =>
                        <BasketListItem key={item.id}>
                            <BasketItem item={item} />
                        </BasketListItem>
                    )}
                </BasketList>
            </ListContainer>}

        </Container>
    )
}

export default Basket