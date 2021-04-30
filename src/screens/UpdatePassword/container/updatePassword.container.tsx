import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/updatePassword.style';
import UpdatePasswordLogo from '../../../assets/svgs/update_password.svg';
import {ButtonWithoutLogo} from '../../../components';
interface Props {
  navigation: any;
}

export function UpdatePasswordScreen({navigation}: Props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstSubContainer}>
        <View style={styles.updateLogoContainer}>
          <UpdatePasswordLogo />
          <Text style={styles.updatePasswordText}>Password updated</Text>
        </View>
        <View>
          <Text style={styles.updatePasswordInfoText}>
            You’ve successfully updated your password.
          </Text>
        </View>
      </View>
      <View style={styles.secondSubContainer}>
        <ButtonWithoutLogo
          onButtonPress={() => {
            navigation.navigate('SignIn');
          }}
          buttonTitle={'BACK TO SIGN IN'}
        />
      </View>
    </View>
  );
}
