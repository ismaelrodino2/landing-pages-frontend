import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridImage = ({ title, background, description, grid }) => {
  return (
    <SectionBackground background={(background = false)}>
      <div className="container">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="pb-20 md:text-lg">{description}</p>
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
          {grid.map((el) => (
            <div
              key={el.srcImg}
              className="transition duration-500 transform hover:scale-110 hover:rotate-2"
              id="gridimg"
            >
              <img src={el.srcImg} alt={el.altText} className="" />
            </div>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
};
GridImage.propTypes = {
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
