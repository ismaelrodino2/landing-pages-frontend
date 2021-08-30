import P from 'prop-types';

export const Loading = ({ children }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black">
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};
Loading.propTypes = {
  children: P.node.isRequired,
};
