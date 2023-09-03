import { FC } from 'react';
import { TaskText } from '../../styled-components/Texts';
import { faker } from '@faker-js/faker/locale/en';

interface DescriptionProps {}

const Description: FC<DescriptionProps> = () => {
  return <TaskText>{faker.lorem.sentences(3)}</TaskText>;
};

export default Description;
