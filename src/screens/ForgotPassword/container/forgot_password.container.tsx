import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Animated,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/forgot_password.style';
import MainLogo from '../../../assets/svgs/main_logo.svg';
import {ButtonWithoutLogo, Input} from '../../../components';
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
  const keyboardAnim = useRef(new Animated.Value(150)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  useEffect(() => {
    dispatch({type: CONSTANTS.CLEAR_ERROR});
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    return () => {
      dispatch({type: CONSTANTS.CLEAR_ERROR});
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(keyboardAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const _keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(keyboardAnim, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const forgetPassword = (forgotData: IforgetData) => {
    dispatch({
      type: CONSTANTS.FORGOT_REQUESTED,
      payload: {forgotData},
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.base} />
      <Animated.View
        style={[
          styles.firstSubContainer,
          {height: keyboardAnim, opacity: opacity},
        ]}>
        <MainLogo />
      </Animated.View>
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
            <Input
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
            disabled={!FIELD_VALIDATIONS.email(email)}
            name="invalid"
            buttonTitle={'RESET PASSWORD'}
            containerStyle={styles.buttonContainerStyle}
            message={state.error}
            loading={state.loading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
