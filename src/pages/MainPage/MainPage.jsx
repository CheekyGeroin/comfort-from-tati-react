import Main from "components/Main/Main"
import { Outlet } from "react-router-dom"

const MainPage = () => {
    return (
        <div>
            <Main />
            <Outlet/>
        </div>
    )
}
export default MainPage