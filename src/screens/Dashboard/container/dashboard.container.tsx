import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/dashboard.style';
import {ButtonWithoutLogo} from '../../../components';
import {CONSTANTS} from '../../../constants';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';

interface Props {
  navigation: any;
}

export function DashboardScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);
  const Logout = () => {
    dispatch({type: CONSTANTS.SIGNOUT_REQUESTED});
  };
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
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
