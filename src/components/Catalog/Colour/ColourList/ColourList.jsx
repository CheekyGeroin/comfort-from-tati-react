import { Img, Item, List } from './ColourList.styled';

const ColourList = ({ data }) => {
  return (
    <List>
      {data.map(item => (
        <Item key={item.id}>
          <Img
            src={item.imgMob}
            alt={item.id}
            srcSet={`${item.imgMob} 154w, ${item.imgDesk} 231w, ${item.imgMob2x} 308w, ${item.imgDesk2x} 462w`}
            sizes="(min-width:768px) 231px, (max-width:767px) 154px, 100vw"
          />
        </Item>
      ))}
    </List>
  );
};
export default ColourList;
