import moment from 'moment';

export const mapTime = (time: moment.MomentInput) => {
  return `${moment(time).format('ddd').toUpperCase()}, ${moment(time)
    .format('MMM DD')
    .toUpperCase()}  |  ${moment(time).format('LT')}`;
};
