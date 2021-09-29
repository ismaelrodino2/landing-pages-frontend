import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridImage = ({
  title,
  background,
  description,
  grid,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <div className="container py-24">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="pb-20 md:text-lg">{description}</p>
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap ">
          {grid.map((el) => (
            <div
              className="transition duration-500 transform hover:scale-110 hover:rotate-2"
              id="gridimg"
              key={`${el.srcImg}${el.altText}`}
            >
              <img src={el.srcImg} alt={el.altText} className="h-64" />
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
  sectionId: P.string,
};
