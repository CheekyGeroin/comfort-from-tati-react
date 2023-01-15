import Catalog from "components/Catalog/Catalog"
import { Outlet } from "react-router-dom"

const CatalogPage = () => {
    return (
        <div>
            <Catalog />
            <Outlet/>
        </div>
    )
    
}
export default CatalogPage