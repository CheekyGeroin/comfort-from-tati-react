import { useState } from "react"
import { Container, Item, List, Link } from "./LanguageSwitcher.styled"



const LanguageSwitcher = () => {
    const [id, setId] = useState('ua')

    const handleId = (e) => {
        setId(e.target.id)
    }

    return (
        <Container>
            <List>
                <Item>{id === 'ua'?<Link to="/" id='ua' active={id} onClick={handleId}>UA</Link> : <Link to="/" id='ua' onClick={handleId}>UA</Link>}</Item>
                <Item>{id === 'en' ? <Link to="/en" id='en' active={id} onClick={handleId}>EN</Link>:<Link to="/en" id='en' onClick={handleId}>EN</Link>}</Item>
        </List>
        </Container>
    )
}
export default LanguageSwitcher