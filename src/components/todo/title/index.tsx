import { FC, useState } from 'react';
import { Checkbox } from '../../styled-components/Checkbox';
import { TitleText } from '../../styled-components/Texts';

interface TitleProps {
  completed: boolean;
  title: string;
}

const Title: FC<TitleProps> = ({ title, completed }) => {
  const [checked, setChecked] = useState(completed);
  return (
    <>
      <TitleText>
        <Checkbox type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> {title}
      </TitleText>
    </>
  );
};

export default Title;
