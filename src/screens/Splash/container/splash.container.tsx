import React, {useEffect} from 'react';
import {View, Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/splash.style';
import Logo from '../../../assets/svgs/logo.svg';
import {CONSTANTS} from '../../../constants';
import {navigate} from '../../../navigators';

export function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: CONSTANTS.SPLASH_SCREEN});
      getUrlAsync();
    }, 2000);

    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const url = await Linking.getInitialURL();
      _handleOpenURL({url});
    };
  }, []);

  const _handleOpenURL = async (e: any) => {
    if (e.url) {
      let route = e.url.replace(/.*?:\/\//g, '').split('/');
      console.log('Route ==>', route);
      if (route[1] == 'reset') {
        navigate('ResetPassword', {id: route[2]});
      }
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
