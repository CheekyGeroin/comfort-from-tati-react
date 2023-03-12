import { Img } from './ColourList.styled';
import { List } from './List';
import './Item.css';

const ColourList = ({ data, type }) => {
  return (
    <List type={type}>
      {data.map(item => (
        <li className="list-item" key={item.id}>
          <Img
            src={item.imgMob}
            alt={item.id}
            srcSet={`${item.imgMob} 154w, ${item.imgDesk} 231w, ${item.imgMob2x} 308w, ${item.imgDesk2x} 462w`}
            sizes="(min-width:768px) 231px, (max-width:767px) 154px, 100vw"
          />
        </li>
      ))}
    </List>
  );
};
export default ColourList;
