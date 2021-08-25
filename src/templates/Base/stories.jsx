import { Base } from '.';
import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const Template12 = () => {
  const args = {
    children: (
      <>
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
      </>
    ),
    ...mock,
  };
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
