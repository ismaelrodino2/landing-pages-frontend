import P from 'prop-types';

export const Footer = ({ html }) => {
  return (
    <div>
      <div
        className="flex justify-center py-6 container-main"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};
Footer.propTypes = {
  html: P.node.isRequired,
};
