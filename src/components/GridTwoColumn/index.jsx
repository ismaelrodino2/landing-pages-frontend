import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridTwoColumn = ({
  title,
  text,
  srcImg,
  background,
  sectionId = '',
}) => {
  return (
    <div>
      <SectionBackground background={background} sectionId={sectionId}>
        <div className="flex flex-col items-center md:flex-row container-main">
          <div className="lg:w-1/3 md:w-2/4">
            <h1 className="text-3xl uppercase md:text-7xl bold py-11">
              {title}
            </h1>
            <p className="text-2xl">{text}</p>
          </div>
          <div className="py-5 md:py-0 lg:w-2/3 md:w-2/4">
            <img src={srcImg} alt={title} />
          </div>
        </div>
      </SectionBackground>
    </div>
  );
};
GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
