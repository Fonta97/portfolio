import { Button } from '~/components/button';
import { Icon } from '~/components/icon';


export const NavToggle = ({ menuOpen, ...rest }) => {
  return (
    <Button
      iconOnly
      className={'toggle'}
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className={'inner'}>
        <Icon className={'icon'} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={'icon'}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
