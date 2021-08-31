import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridContent = ({ title, html, background }) => {
  return (
    <SectionBackground background={background}>
      <div className="flex flex-col self-center py-24 text-center container-secondary">
        <h1 className="py-8 text-4xl font-bold uppercase">{title}</h1>
        <div
          className="flex flex-col"
          id="paragraphs"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </SectionBackground>
  );
};
GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
