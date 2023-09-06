import { FC } from 'react';
import { AvaImg } from '../../styled-components/AvaImg';
import UserAvatar from '../../../assets/avatar.png';

const Avatar: FC = () => {
  return <AvaImg src={UserAvatar} />;
};

export default Avatar;
