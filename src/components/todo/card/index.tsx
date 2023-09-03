import { FC } from 'react';
import { CardInner, CardWrapper } from '../../styled-components/CardParts';
import Title from '../title';
import Description from '../description';
import Date from '../date';
import { faker } from '@faker-js/faker/locale/en';
import { LineSection } from '../../styled-components/LineSection';
import Tag from '../tag';
import { TagGroup } from '../../styled-components/TagParts';
import Avatar from '../avatar';
import { ColSection } from '../../styled-components/ColSection';
import { ITodo } from '../../../models';

const ToDoCard: FC<ITodo> = ({ title, completed }) => {
  return (
    <CardWrapper>
      <CardInner>
        <Title title={title} completed={completed} />
        <ColSection>
          <LineSection>
            <Date date={faker.date.recent({ days: 7 })} />
            <Date date={faker.date.soon({ days: 7 })} />
          </LineSection>
          <Description />
        </ColSection>
        <LineSection>
          <TagGroup>
            <Tag tagType="entity" label="Entity title" tagColor="white" />
            <Tag tagType="role" label="Front-end" tagColor="#616C82" />
          </TagGroup>
          <Avatar />
        </LineSection>
      </CardInner>
    </CardWrapper>
  );
};

export default ToDoCard;
