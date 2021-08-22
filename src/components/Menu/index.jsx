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
      <div className="fixed z-20 flex items-center justify-center w-16 h-16 text-white bg-black top-8 right-8 sm:hidden">
        {visible ? (
          <CloseIcon className="w-10 h-10" />
        ) : (
          <MenuIcon className="w-10 h-10" />
        )}
      </div>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-red-600 ">
        <div
          className="flex items-center h-screen bg-blue-600 sm:h-auto"
          visible={visible}
        >
          <div className="flex flex-col sm:flex-row container-main sm:flex sm:justify-between">
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
