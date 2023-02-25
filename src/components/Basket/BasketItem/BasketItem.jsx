import { useSelector } from "react-redux"
import { getBasketItem } from "redux/selectors"

const BasketItem = () => {
    const items = useSelector(getBasketItem)
    console.log(items)
    return (
        <div>
            <div></div>
            <div>
                <h3>{items.title}</h3>
            </div>
            <div></div>
            <div>
                <p>{items.price}</p>
            </div>
        </div>
    )
}

export default BasketItem