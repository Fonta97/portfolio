import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';


export const Footer = ({ className }) => (
  <footer className={classes('footer', className)}>
    <Text size="s" align="center">
      <span className={'date'}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link secondary className={'link'} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
