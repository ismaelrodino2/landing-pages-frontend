import P from 'prop-types';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <div className="md:pt-12">
        {children}
        <Footer html={footerHtml} />
      </div>
    </>
  );
};
Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
