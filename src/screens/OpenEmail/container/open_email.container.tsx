import * as React from 'react';
import {  View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../style/open_email.style';

interface Props {
  navigation: any;
}

export function OpenEmailScreen({navigation}:Props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>OpenEmail Screen</Text>
    </View>
  );
}
