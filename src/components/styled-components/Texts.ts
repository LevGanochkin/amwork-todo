import { styled } from 'styled-components';

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: start;
`;

export const TitleText = styled(Text)`
  line-height: 18.2px;
  text-align: start;
  color: #3d8fec;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DateText = styled(Text)`
  line-height: 18.2px;
  color: #50b810;
  font-size: 13px;
`;

export const TaskText = styled(Text)`
  height: 20px;
  line-height: 18.2px;
  color: #555555;
  font-size: 13px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomText = styled(Text)<{ $color?: string; $size?: string; $lineHeight?: string }>`
  color: ${(props) => props.$color || '#616C82'};
  font-size: ${(props) => props.$size || '12px'};
  line-height: ${(props) => props.$lineHeight || '16.8px'}};
`;
