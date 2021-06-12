import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { openInbox } from 'react-native-email-link';
import { useDispatch } from 'react-redux';
import styles from '../style/check_email.style';
import Mail from '../../../assets/svgs/mail.svg';
import { ButtonWithoutLogo, Toast } from '../../../components';
import { COLORS } from 'theme';
import { IforgetData } from 'screens';
import { CONSTANTS } from 'constants/AppConst';

interface Props {
  navigation: any;
  route: any;
}

export function CheckEmailScreen({ route, navigation }: Props) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const requestEmail = (forgotData: IforgetData) => {
    setVisible(true);
    dispatch({
      type: CONSTANTS.RESEND_EMAIL_REQUESTED,
      payload: { forgotData },
    });
  }

  const onDismissToast = () => setVisible(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightwhite} />
      <Toast visible={visible} onDismiss={() => { onDismissToast() }} message={"We have sent you a password recovery email"} />
      <View style={[styles.subContainer, { alignItems: 'center' }]}>
        <Mail />
        <Text style={styles.checkEmail}>Check your email</Text>
        <Text style={styles.emailInstruction}>
          We have sent a password recovery instruction to your email.
        </Text>
      </View>
      <View style={[styles.subContainer, { justifyContent: 'space-between' }]}>
        <View>
          <ButtonWithoutLogo
            buttonTitle="OPEN EMAIL APP"
            onButtonPress={() => {
              openInbox();
            }}
          />
          <ButtonWithoutLogo
            buttonTitle="BACK TO SIGN IN"
            onButtonPress={() => {
              navigation.navigate('SignIn');
            }}
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
              style={[styles.checkRequest, { textDecorationLine: 'underline' }]}
              onPress={() => { requestEmail({ email: route?.params?.email }) }}>
              request instruction email again.
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
