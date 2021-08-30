import P from 'prop-types';

export const SectionBackground = ({ children, background }) => {
  return (
    <div
      background={background}
      className={background ? 'bg-black text-white' : 'bg-white text-black'}
    >
      <div className="flex flex-col justify-center min-h-screen container-main ">
        {children}
      </div>
    </div>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
