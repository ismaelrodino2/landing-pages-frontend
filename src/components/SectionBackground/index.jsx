import P from 'prop-types';

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({ children, background, sectionId }) => {
  const id = sectionId ? sectionId : random();
  return (
    <div
      background={background}
      className={background ? 'bg-primary text-white' : 'bg-white text-black'}
      id={id}
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
  sectionId: P.string,
};
