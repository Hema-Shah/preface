import React, {useEffect} from 'react';
import {View,StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/splash.style';
import Logo from '../../../assets/svgs/logo.svg';
import {CONSTANTS} from '../../../constants';
import { COLORS } from 'theme';

export function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: CONSTANTS.SPLASH_SCREEN});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <Logo />
    </View>
  );
}
