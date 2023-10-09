import { useBasket } from 'utils/basketContext';
import {
  BasketList,
  BasketListItem,
  BasketTitle,
  Container,
  ListContainer,
  TitleContainer,
  EmptyWarning,
} from './Basket.styled';
import BasketItem from './BasketItem/BasketItem';
import { useEffect, useState } from 'react';
import { useFirstMountState } from 'react-use';


const Basket = () => {
  const isFirstRender = useFirstMountState()
  const { basketItem } = useBasket();
  const storedItem = JSON.parse(localStorage.getItem('item'))
const [cart, setCart] = useState(basketItem);
 

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(basketItem))
    if (!isFirstRender) {
      setCart(storedItem)
    }
    
  },[basketItem, isFirstRender, storedItem])



  const increase = id => {
    setCart(cart => {
        return cart.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: ++product.quantity,
                    totalPrice: product.quantity * product.basketPrice
              }
            }
            return product
      });
    });
    };
    
    const decrease = (id) => {
        setCart(cart => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: --product.quantity,
                        totalPrice: product.quantity * product.basketPrice
                    }
                }
                return product
            })
        })
  }
  
  return (
    <Container>
      <TitleContainer>
        <BasketTitle>Кошик</BasketTitle>
      </TitleContainer>

      {cart.length >= 1 && (
        <ListContainer>
          <BasketList>
            {cart.map(item => (
              <BasketListItem key={item.id}>
                    <BasketItem item={item} increase={increase} decrease={decrease} />
              </BasketListItem>
            ))}
          </BasketList>
        </ListContainer>
      )}
      {cart.length < 1 && <EmptyWarning>У вас порожній кошик</EmptyWarning>}
    </Container>
  );
};

export default Basket;
