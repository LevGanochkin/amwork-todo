import { styled } from 'styled-components';

export const CustomTag = styled.div<{ $type: 'entity' | 'role' }>`
  width: auto;
  height: 100%;
  padding: 1px 6px 2px;
  background-color: ${(props) => (props.$type === 'entity' ? '#b233a6' : '#EBEEF6')};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TagGroup = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`;

export const TagCorner = styled.img`
  width: 12px;
  height: 20px;
  position: relative;
  right: 7px;
`;
