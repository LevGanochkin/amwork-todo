import { FC } from 'react';
import { DateText } from '../../styled-components/Texts';

interface DateProps {
  date: Date;
}

const Date: FC<DateProps> = ({ date }) => {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
      hourCycle: 'h11',
      hour: '2-digit',
      minute: '2-digit',
      formatMatcher: 'best fit',
    };
    return Intl.DateTimeFormat('en-US', options).format(date);
  };

  return <DateText>{formatDate(date)}</DateText>;
};

export default Date;
