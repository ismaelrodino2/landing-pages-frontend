import { GridTwoColumn } from '.';

export const Template7 = () => {
  const args = {
    title: 'Grid two columns',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    srcImg: 'assets/images/cake.svg',
  };
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
