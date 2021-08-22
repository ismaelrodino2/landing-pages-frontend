import P from 'prop-types';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <div className="flex flex-col items-center h-full py-3 text-center sm:flex-wrap sm:flex-row">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </div>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
