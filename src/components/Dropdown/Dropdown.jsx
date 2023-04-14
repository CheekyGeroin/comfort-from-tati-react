import { cloneElement, useEffect, useMemo, useRef } from 'react';
import { isValidElement } from 'react';
import { Children } from 'react';

const { useState } = require('react');
const { Root, Control, Menu } = require('./Dropdown.styled');

const Dropdown = ({ label, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const handleOpen = () => setOpen(true);
  const elements = useRef({});

  const items = useMemo(() => Children.toArray(children), [children]);

  const indexes = useMemo(
    () =>
      items.reduce((result, item, index) => {
        if (isValidElement(item)) {
          if (!item.props.disabled && item.type === 'MenuItem') {
            result.push(index);
          }
        }

        return result;
      }, []),
    [items]
  );

  const handleKeyDown = async e => {
    switch (e.code) {
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        setHighlightedIndex(highlightedIndex => {
          const index =
            highlightedIndex === indexes.length - 1 ? 0 : highlightedIndex + 1;
          return index;
        });
        break;
      case 'ArrowUp': {
        e.preventDefault();
        e.stopPropagation();
        setHighlightedIndex(highlightedIndex => {
          const index =
            highlightedIndex === 0 ? indexes.length - 1 : highlightedIndex - 1;
          return index;
        });
        break;
      }
      case 'Enter': {
        e.preventDefault();
        e.stopPropagation();
        const item = items[indexes[highlightedIndex]];
        if (highlightedIndex !== -1 && isValidElement(item)) {
          handleChange(item.props.value);
        }
        break;
      }

      default:
        return;
    }
  };

  const handleChange = item => {
    onchange(item);
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown, true);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isOpen]);

  return (
    <Root>
      <Control onClick={handleOpen} type="button">
        {label}
      </Control>
      {isOpen && (
        <Menu>
          {Children.map(children, (child, index) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                active: index === indexes[highlightedIndex],
                onMouseEnter: () => setHighlightedIndex(indexes.indexOf(index)),
                onClick: e => {
                  e.stopPropagation();
                  handleChange(child.props.value);
                },
                ref: node => {
                  elements.current[index] = node;
                  elements.current[indexes[index]]?.scrollIntoView({
                    block: 'nearest',
                  });
                },
              });
            }
          })}
        </Menu>
      )}
    </Root>
  );
};

export default Dropdown;
