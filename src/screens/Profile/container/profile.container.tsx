import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { CONFIG } from 'config';
import { getBuildNumber } from 'react-native-device-info';
import styles from '../style/profile.style';
import {ButtonWithoutLogo} from '../../../components';
import {CONSTANTS} from '../../../constants';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';

interface Props {
  navigation: any;
}

export function ProfileScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);
  const Logout = () => {
    dispatch({type: CONSTANTS.SIGNOUT_REQUESTED});
  };
  return (
    <View style={styles.mainContainer}>
      <Text>{`Version: ${getBuildNumber()}(${CONFIG.environment})`}</Text>
      <ButtonWithoutLogo
        onButtonPress={() => {
          Logout();
        }}
        buttonTitle={'LOG OUT'}
        containerStyle={styles.buttonContainerStyle}
        loading={state.loading}
      />
    </View>
  );
}
