import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/reset_password.style';
import ResetPasswordLogo from '../../../assets/svgs/reset_password.svg';
import {ButtonWithoutLogo, TextInput} from '../../../components';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';

interface Props {
  navigation: any;
}

export function ResetPasswordScreen({navigation}: Props) {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstSubContainer}>
        <ResetPasswordLogo />
        <Text style={styles.resetPasswordText}>Reset password</Text>
      </View>
      <View style={styles.secondSubContainer}>
        <TextInput
          placeholder="New Password"
          name="new_password"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          // error={error}
        />
        <TextInput
          placeholder="Confirm Password"
          name="confirm_password"
          onChangeText={text => {
            setConfirmPassword(text);
          }}
          value={confirm_password}
          // error={error}
        />
        <ButtonWithoutLogo
          onButtonPress={() => {
            // logIn({email, password});
          }}
          buttonTitle={'RESET PASSWORD'}
          containerStyle={styles.resetBtnStyle}
          loading={state.loading}
        />
      </View>
    </View>
  );
}
