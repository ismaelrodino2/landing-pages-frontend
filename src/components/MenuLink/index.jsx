import P from 'prop-types';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  console.log(children);
  return (
    <a href={link} target={target}>
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
