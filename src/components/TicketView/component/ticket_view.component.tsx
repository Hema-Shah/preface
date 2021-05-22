import React from 'react';
import {Text,Dimensions} from 'react-native'
import Svg,{Circle, Rect,Path , SvgXml } from 'react-native-svg';

type TicketViewProps = {
};

const {width,height} = Dimensions.get('window');

export const TicketView = ({}: TicketViewProps) => {
  const xml = `<svg width="100%" height="146" viewBox="0 0 307 146" fill="#fff" xmlns="http://www.w3.org/2000/svg">
  <path d="M293.395 146H210.921L198.342 134.316L185.75 146H12.6579L0 133.342V12.6579L12.6579 0H185.75L198.342 11.6842L210.921 0H293.395L306.039 12.6579V133.342L293.395 146Z" fill="#000"/>
  </svg>`
return <SvgXml xml={xml} />
};
