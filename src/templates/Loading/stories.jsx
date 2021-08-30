import { Loading } from '.';
import { AiOutlineLoading } from 'react-icons/ai';

export const Load = () => {
  const args = {
    children: (
      <AiOutlineLoading className="animate-spin" size="50px" color="white" />
    ),
  };
  return (
    <div>
      <Loading {...args} />
    </div>
  );
};
