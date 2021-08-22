import { NavLinks } from '.';
import links from './mock';
export const Template2 = () => {
  const args = {
    links: links,
  };
  return (
    <div className="">
      <NavLinks {...args} />
    </div>
  );
};
