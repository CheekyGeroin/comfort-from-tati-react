import Basket from "components/Basket/Basket"
import { Outlet } from "react-router-dom"

const BasketPage = () => {

    return (
        <div>
            <Basket />
            <Outlet/>
        </div>
    )
    
}
export default BasketPage