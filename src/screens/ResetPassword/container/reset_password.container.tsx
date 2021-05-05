import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/reset_password.style';
import ResetPasswordLogo from '../../../assets/svgs/reset_password.svg';
import {ButtonWithoutLogo, TextInput} from '../../../components';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';
import {COLORS} from 'theme';
import {CONSTANTS} from 'constants/AppConst';

interface Props {
  navigation: any;
  route: any;
}

export interface IresetData {
  new_password: string;
  confirm_password: string;
  id: string;
}

export function ResetPasswordScreen({navigation, route}: Props) {
  console.log('route', route);
  const [new_password, setNewPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const {
    params: {id},
  } = route;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  useEffect(() => {
    dispatch({type: CONSTANTS.CLEAR_ERROR});
    return () => {
      dispatch({type: CONSTANTS.CLEAR_ERROR});
    };
  }, []);

  const resetPassword = (resetData: IresetData) => {
    dispatch({
      type: CONSTANTS.RESET_PASSWORD_REQUESTED,
      payload: {resetData},
    });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <View style={styles.firstSubContainer}>
        <ResetPasswordLogo />
        <Text style={styles.resetPasswordText}>Reset password</Text>
      </View>
      <View style={styles.secondSubContainer}>
        <TextInput
          placeholder="New Password"
          name="new_password"
          onChangeText={text => {
            setNewPassword(text);
          }}
          value={new_password}
          message={state.error}
          secure={true}
        />
        <TextInput
          placeholder="Confirm Password"
          name="confirm_password"
          onChangeText={text => {
            setConfirmPassword(text);
          }}
          value={confirm_password}
          message={state.error}
          secure={true}
        />
        <ButtonWithoutLogo
          onButtonPress={() => {
            resetPassword({new_password, confirm_password, id});
          }}
          name="invalid"
          buttonTitle={'RESET PASSWORD'}
          containerStyle={styles.resetBtnStyle}
          message={state.error}
          loading={state.loading}
        />
      </View>
    </View>
  );
}
