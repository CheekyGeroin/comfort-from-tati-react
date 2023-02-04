import { Img, Item, List } from "./ColourList.styled"

const ColourList = ({data}) => {
    
    
    return(
        <List>
            {data.map(item => <Item key={item.id}>
                <Img src={item.imgDesk} alt={item.id} srcSet={`${item.imgDesk} 231w, ${item.imgDesk2x} 462w`} sizes="(min-width:320px) 231px, 100vw" />
            </Item>)}
        </List>
    )

}
export default ColourList