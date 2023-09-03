import { FC } from 'react';
import { CustomText } from '../styled-components/Texts';
import { HeaderSection } from '../styled-components/LineSection';
import { ButtonLine } from '../styled-components/ButtonLine';
import { PlusButton } from '../styled-components/PlusButton';
import AddButton from '../../assets/addbutton.png';
import { Counter } from '../styled-components/Counter';

interface HeaderProps {
  count: number;
}

const Header: FC<HeaderProps> = ({ count }) => {
  return (
    <HeaderSection>
      <CustomText $color="#50B810" $size="14px" $lineHeight="19.60px">
        Today
      </CustomText>
      <ButtonLine>
        <PlusButton $img={AddButton} />
        <Counter>{count}</Counter>
      </ButtonLine>
    </HeaderSection>
  );
};

export default Header;
