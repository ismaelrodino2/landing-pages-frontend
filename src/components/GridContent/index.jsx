import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

export const GridTwoColumn = ({ title, html, background }) => {
  return (
    <SectionBackground background={(background = true)}>
      <div className="flex flex-col self-center text-center container-secondary">
        <h1 className="py-8 text-4xl font-bold uppercase">{title}</h1>
        <div id="paragraphs" dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </SectionBackground>
  );
};
GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
