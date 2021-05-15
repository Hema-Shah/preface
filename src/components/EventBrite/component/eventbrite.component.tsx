import React,{useEffect} from 'react';
import styles from '../style/eventbrite.style';
import {View} from 'react-native';

type EventBriteProps = {
  eventId: string;
};

export const EventBriteButton: React.FC<EventBriteProps> = ({
  eventId,
  children
}) => {
  
  return (
    <View style={styles.mainContainer}>
      
    </View>
  );
};
