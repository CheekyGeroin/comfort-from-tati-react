const { useState } = require('react');
const { Root, Control, Menu } = require('./Dropdown.styled');

const Dropdown = ({ label, children }) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Root>
      <Control onClick={handleOpen} type="button">
        {label}
      </Control>
      {isOpen && <Menu>{children}</Menu>}
    </Root>
  );
};

export default Dropdown