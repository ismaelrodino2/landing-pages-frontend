import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import Template2 from '../NavLinks/stories';

export const Template6 = () => {
  const args = {
    links: linksMock,
    logoData: {
      text: 'logo',
      link: '#target',
      srcImg: '',
    },
  };
  return <Menu {...args} />;
};
