import Advantages from "components/Advantages/Advantages"
import CatalogList from "components/CatalogList/CatalogList"
import Hero from "components/Hero/Hero"
import Reviews from "components/Reviews/Reviews"
import Stock from "components/Stock/Stock"

const Main = () => {
    return (
        <div>
            <Hero />
            <Advantages />
            <CatalogList />
            <Reviews />
            <Stock />
        </div>
)
}

export default Main