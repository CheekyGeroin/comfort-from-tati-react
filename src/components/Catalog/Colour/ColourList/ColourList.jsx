import { Img, Item, List } from "./ColourList.styled"

const ColourList = ({data}) => {
    
    
    return(
        <List>
            {data.map(item => <Item key={item.id}>
                <Img src={item.imgDesk} alt={item.id} />
            </Item>)}
        </List>
    )

}
export default ColourList