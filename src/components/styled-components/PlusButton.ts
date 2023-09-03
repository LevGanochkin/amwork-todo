import { styled } from 'styled-components';

export const PlusButton = styled.button<{ $img: string }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #ebeef6;
  background-image: url(${(props) => props.$img});
  background-size: cover;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }
`;
