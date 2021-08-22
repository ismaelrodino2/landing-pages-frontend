import { MenuLink } from '.';

export const Template = () => {
  const args = {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  };
  return (
    <div className="flex">
      <MenuLink {...args} />
    </div>
  );
};
