import { FC } from 'react';
import { AvaImg } from '../../styled-components/AvaImg';
import UserAvatar from '../../../assets/avatar.png';

interface AvatarProps {}

const Avatar: FC<AvatarProps> = () => {
  return <AvaImg src={UserAvatar} />;
};

export default Avatar;
