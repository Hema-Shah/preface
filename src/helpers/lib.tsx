import moment from 'moment';
import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const mapTime = (time: moment.MomentInput) => {
  return `${moment(time).format('ddd').toUpperCase()}, ${moment(time)
    .format('MMM DD')
    .toUpperCase()}  |  ${moment(time).format('LT')}`;
};

const mapTimeWithYear = (time: moment.MomentInput) => {
  return `${moment(time).format('ddd').toUpperCase()}, ${moment(time)
    .format('MMM DD')
    .toUpperCase()}. ${moment(time).format('YYYY')}`;
};

const mapStartEndTime = (
  start: moment.MomentInput,
  end: moment.MomentInput,
) => {
  return `${moment(start).format('ddd').toUpperCase()}, ${moment(start).format(
    'hh:mm',
  )}-${moment(end).format('hh:mm')} HKT`;
};

const widthPercentageToDP = (widthPercent: number) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = widthPercent;

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent: number) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = heightPercent;

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export {
  mapTime,
  mapTimeWithYear,
  mapStartEndTime,
  widthPercentageToDP,
  heightPercentageToDP,
};
