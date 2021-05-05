import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/forgot_password.style';
import MainLogo from '../../../assets/svgs/main_logo.svg';
import {ButtonWithoutLogo, TextInput} from '../../../components';
import {CONSTANTS, FIELD_VALIDATIONS} from '../../../constants';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';
import {COLORS} from 'theme';

interface Props {
  navigation: any;
}

export interface IforgetData {
  email: string;
}

export function ForgotPasswordScreen({navigation}: Props) {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  useEffect(() => {
    dispatch({type: CONSTANTS.CLEAR_ERROR});
    return () => {
      dispatch({type: CONSTANTS.CLEAR_ERROR});
    };
  }, []);

  const forgetPassword = (forgotData: IforgetData) => {
    dispatch({
      type: CONSTANTS.FORGOT_REQUESTED,
      payload: {forgotData},
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.base} />
      <View style={styles.firstSubContainer}>
        <MainLogo />
      </View>
      <View style={styles.secondSubContainer}>
        <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
      </View>
      <KeyboardAvoidingView style={styles.thirdSubContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={styles.subScrollView}>
            <View style={styles.forgotView}>
              <Text style={styles.forgotText}>
                Don’t worry! We will send you an email with instructions to
                reset your password.
              </Text>
            </View>
            <TextInput
              placeholder="Email"
              name="email"
              onChangeText={text => {
                setEmail(text);
                dispatch({type: CONSTANTS.CLEAR_ERROR});
              }}
              value={email}
              message={state.error}
              text={'Please enter a valid email address.'}
              valid={FIELD_VALIDATIONS.email(email)}
            />
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 40}}>
          <ButtonWithoutLogo
            onButtonPress={() => {
              forgetPassword({email: email.toLowerCase()});
            }}
            buttonTitle={'RESET PASSWORD'}
            containerStyle={styles.buttonContainerStyle}
            loading={state.loading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
