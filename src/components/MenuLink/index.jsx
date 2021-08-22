import P from 'prop-types';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <a
      href={link}
      target={target}
      className="block px-3 py-3 no-underline sm:py-0 hover:text-gray-600"
    >
      {children}
    </a>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};

// _blank	Opens the linked document in a new window or tab
// _self	Opens the linked document in the same frame as it was clicked (this is default)
