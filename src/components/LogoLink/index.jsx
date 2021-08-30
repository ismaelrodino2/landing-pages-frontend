import P from 'prop-types';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <div className="self-center w-1/5">
      <a href={link} className="text-5xl font-bold uppercase">
        {!!srcImg && <img className="max-h-10" src={srcImg} alt={text} />}
        {!srcImg && text}
      </a>
    </div>
  );
};
//!! se receber ! se não receber && mostra ...
LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
