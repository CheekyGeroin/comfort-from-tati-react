import { useBasket } from "utils/basketContext"
import BasketItem from "./BasketItem/BasketItem"

const Basket = () => {
    const {basketItem} = useBasket()
    
    return (
        <div>
            <div>
                <h2>Кошик</h2>
            </div>

            <div>
                <ul>
                    {basketItem.map(item =>
                        <li key={item.id}>
                            <BasketItem item={item} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Basket