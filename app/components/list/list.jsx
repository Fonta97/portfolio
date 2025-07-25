import { classes } from '~/utils/style';


export const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element className={classes('list', className)} {...rest}>
      {children}
    </Element>
  );
};

export const ListItem = ({ children, ...rest }) => {
  return (
    <li className={'item'} {...rest}>
      {children}
    </li>
  );
};
