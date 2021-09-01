import P from 'prop-types';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className="fixed z-20 flex items-center justify-center w-16 h-16 text-white bg-primary top-8 right-8 sm:hidden"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" className="w-10 h-10" />
        ) : (
          <MenuIcon aria-label="Open menu" className="w-10 h-10" />
        )}
      </div>
      <div>
        <div
          className={
            visible
              ? 'fixed top-0 bottom-0 left-0 right-0  bg-white z-10 flex items-center'
              : 'fixed w-full invisible sm:visible sm:h-auto bg-white sm:bg-white z-10'
          }
        >
          <div
            onClick={() => setVisible(false)}
            className="flex flex-col bg-white sm:flex-row container-main sm:flex sm:justify-between"
          >
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </div>
        </div>
      </div>
    </>
  );
};

Menu.propTypes = {
  links: P.arrayOf(
    P.shape({
      ...NavLinks.propTypes,
      logoData: P.shape(LogoLink.propTypes).isRequired,
    }),
  ),
};
