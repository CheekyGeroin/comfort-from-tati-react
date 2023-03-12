import cssO from './Open.module.css';
import cssC from './Close.module.css';
import clsx from 'clsx';

export const List = ({ type, children }) => {
  if (type === undefined || type === null || type === '') {
    type = 'close';
  }
  console.log(type);
  if (type === 'open') {
    return <ul className={clsx(cssO[type])}>{children}</ul>;
  }
  if (type === 'close') {
    return <ul className={clsx(cssC[type])}>{children}</ul>;
  }
};
