/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface CalendarComponentProps {
  setValue: any;
}

interface CalendarComponentState {
  startDate: Date;
  endDate: Date;
  key: string;
}

const CalendarComponent = ({ setValue }: CalendarComponentProps) => {
  const [state, setState] = useState<CalendarComponentState>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const onRangeChange = (ranges: any) => {
    setValue('startDate', format(ranges['selection'].startDate, 'yyyy-MM-dd'));
    setValue('endDate', format(ranges['selection'].endDate, 'yyyy-MM-dd'));
    setState({
      startDate: ranges['selection'].startDate,
      endDate: ranges['selection'].endDate,
      key: ranges['selection'].key,
    });
  };

  return (
    <div className='w-full flex justify-center content-center'>
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={onRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={[state]}
        className='w-full'
        rangeColors={['#FFD873']}
      />
    </div>
  );
};

export default CalendarComponent;
