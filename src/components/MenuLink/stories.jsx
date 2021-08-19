import { MenuLink } from '.';

export default {
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
};

export const Template = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
