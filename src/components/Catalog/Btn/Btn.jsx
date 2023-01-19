import { Link } from "./Btn.styled"
import BtnSvgSelector from "./BtnSvgSelector"

const Btn = () => {
    return (
        <Link to='/'>
            <BtnSvgSelector id={'arrow'} />
        </Link>
    )
}

export default Btn