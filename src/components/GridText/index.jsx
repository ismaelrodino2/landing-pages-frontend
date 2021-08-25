import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridText = ({ title, background, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <div className="container py-24">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="pb-20 md:text-lg">{description}</p>
        <div className="flex flex-col gap-4 md:flex-row">
          {grid.map((el) => (
            <div key={el.title} className="">
              <h1 className="pb-8 text-3xl font-bold">{el.title}</h1>
              <p className="mb-12 text-lg">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
};
