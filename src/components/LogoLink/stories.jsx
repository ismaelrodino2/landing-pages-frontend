import { LogoLink } from '.';

export const Template3 = () => {
  const args = {
    text: 'LOGO',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost/',
  };
  return (
    <div className="">
      <LogoLink {...args} />
    </div>
  );
};
