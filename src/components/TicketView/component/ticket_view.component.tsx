import React from 'react';
import {Text,Dimensions} from 'react-native'
import Svg,{Circle, Rect,Path} from 'react-native-svg';

type TicketViewProps = {
};

const {width,height} = Dimensions.get('window');

export const TicketView = ({}: TicketViewProps) => {
  return (
    <Svg>
      <Path d="M297.395 146H214.921L202.342 134.316L189.75 146H16.6579L4 133.342V12.6579L16.6579 0H189.75L202.342 11.6842L214.921 0H297.395L310.039 12.6579V133.342L297.395 146Z" fill="grey"/>
      <Path d="M16.6579 0L4 12.6579V133.342L16.6579 146V0Z" fill="#85BCCE"/>
    </Svg>
  );
};
