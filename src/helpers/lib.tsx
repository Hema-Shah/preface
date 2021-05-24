import moment from 'moment';

export const mapTime = (time: moment.MomentInput) => {
  return `${moment(time).format('ddd').toUpperCase()}, ${moment(time)
    .format('MMM DD')
    .toUpperCase()}  |  ${moment(time).format('LT')}`;
};

export const mapStartEndTime = (
  start: moment.MomentInput,
  end: moment.MomentInput,
) => {
  return `${moment(start).format('ddd').toUpperCase()}, ${moment(start).format(
    'hh:mm',
  )}-${moment(end).format('hh:mm')} HKT`;
};
