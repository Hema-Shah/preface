import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/splash.style';
import Logo from '../../../assets/svgs/logo.svg';
import {useSelector} from 'react-redux';
import {CONSTANTS} from '../../../constants';

export function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: CONSTANTS.SPLASH_SCREEN});
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
