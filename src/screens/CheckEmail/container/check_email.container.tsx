import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/check_email.style';
import Mail from '../../../assets/svgs/mail.svg';
import {ButtonWithoutLogo} from '../../../components';
import {COLORS} from 'theme';

interface Props {
  navigation: any;
}

export function CheckEmailScreen({navigation}: Props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <View style={[styles.subContainer, {alignItems: 'center'}]}>
        <Mail />
        <Text style={styles.checkEmail}>Check your email</Text>
        <Text style={styles.emailInstruction}>
          We have sent a password recovery instruction to your email.
        </Text>
      </View>
      <View style={[styles.subContainer, {justifyContent: 'space-between'}]}>
        <View>
          <ButtonWithoutLogo
            buttonTitle="OPEN EMAIL APP"
            onButtonPress={() => {}}
          />
          <ButtonWithoutLogo
            buttonTitle="BACK TO SIGN IN"
            onButtonPress={() => {}}
            containerStyle={styles.backToSignInBtn}
            buttonTextStyle={styles.backToSignInText}
          />
        </View>
        <View>
          <Text style={styles.notReceiveEmail}>
            DID NOT RECEIVE YOUR EMAIL?
          </Text>
          <Text style={styles.checkRequest}>
            Check spam folder,{'\n'}or{' '}
            <Text
              style={[styles.checkRequest, {textDecorationLine: 'underline'}]}>
              request instruction email again.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
