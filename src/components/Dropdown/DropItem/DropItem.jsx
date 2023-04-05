const { Root } = require('./DropItem.styled');

const DropItem = ({ active, disabled, value, onClick, children }) => {
  return (
    <Root disabled={disabled} active={active}>
      {children}
    </Root>
  );
};

export default DropItem