import { FC } from 'react';
import { CustomTag, TagCorner } from '../../styled-components/TagParts';
import { CustomText } from '../../styled-components/Texts';
import corner from '../../../assets/corner.png';

interface TagProps {
  label: string;
  tagType: 'entity' | 'role';
  tagColor: string;
}

const Tag: FC<TagProps> = ({ label, tagType, tagColor }) => {
  return (
    <>
      <CustomTag $type={tagType}>
        <CustomText $color={tagColor}>{label}</CustomText>
      </CustomTag>
      <TagCorner src={corner} hidden={tagType === 'entity'} />
    </>
  );
};

export default Tag;
