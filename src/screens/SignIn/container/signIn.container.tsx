import React, { useState, useEffect, useRef, Fragment } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  Animated,
  Keyboard
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../style/signIn.style';
import MainLogo from '../../../assets/svgs/main_logo.svg';
import { ButtonWithoutLogo, ButtonWithLogo, Input } from '../../../components';
import { COLORS } from 'theme';
import { CONSTANTS, FIELD_VALIDATIONS } from '../../../constants';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  GraphRequestManager,
  GraphRequest,
  LoginManager,
} from 'react-native-fbsdk';
import appleAuth from '@invertase/react-native-apple-authentication';
import jwt_decode from 'jwt-decode';
import { RootState } from 'redux/reducers';
import { authStateIF } from 'redux/reducers/authReducer';
import { heightPercentageToDP } from 'helpers';

interface Props {
  navigation: any;
}

export interface Ilogindata {
  email: string;
  password: string;
}

export function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const keyboardAnim = useRef(
    new Animated.Value(heightPercentageToDP(18)),
  ).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  useEffect(() => {
    dispatch({ type: CONSTANTS.CLEAR_ERROR });
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    return () => {
      dispatch({ type: CONSTANTS.CLEAR_ERROR });
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = (event: { duration: number }) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: event.duration,
        useNativeDriver: false,
      }),
      Animated.timing(keyboardAnim, {
        toValue: 0,
        duration: event.duration,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const _keyboardDidHide = (event: { duration: number }) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: event.duration,
        useNativeDriver: false,
      }),
      Animated.timing(keyboardAnim, {
        toValue: heightPercentageToDP(18),
        duration: event.duration,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const logIn = (logindata: Ilogindata) => {
    dispatch({ type: CONSTANTS.SIGNIN_REQUESTED, payload: { logindata } });
  };

  const GLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      let socialData = {
        email: userinfo.user.email,
        social_id: userinfo.user.id,
        login_type: 'Google',
      };
      dispatch({ type: CONSTANTS.SOCIAL_LOGIN_REQUESTED, payload: { socialData } });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const FBLogin = () => {
    LoginManager.logInWithPermissions([
      'public_profile',
      'email'
    ]).then(function (result: any) {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then((data: any) => {
          let accessToken = data.accessToken;
          const responseInfoCallback = (error: any, fbuserInfo: any) => {
            if (error) {
              console.log(error);
            } else {
              let socialData = {
                email: fbuserInfo.email,
                social_id: fbuserInfo.id,
                login_type: 'facebook',
              };
              dispatch({
                type: CONSTANTS.SOCIAL_LOGIN_REQUESTED,
                payload: { socialData },
              });
            }
          };
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string:
                    'email,name',
                },
              },
            },
            responseInfoCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        });
      }
    });
  };

  const AppleLogin = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    const { email, sub }: any = jwt_decode(appleAuthRequestResponse.identityToken ?? '');
    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
      let socialData = {
        email: email,
        social_id: sub,
        login_type: 'apple',
      };
      dispatch({ type: CONSTANTS.SOCIAL_LOGIN_REQUESTED, payload: { socialData } });
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.base} />
      <Animated.View
        style={[
          styles.firstSubContainer,
          { height: keyboardAnim, opacity: opacity },
        ]}>
        <MainLogo />
      </Animated.View>
      <View style={styles.secondSubContainer}>
        <Text style={styles.welcomeTextStyle}>Welcome Back</Text>
      </View>
      <KeyboardAvoidingView style={styles.thirdSubContainer}>
        <Input
          placeholder="Email"
          name="email"
          onChangeText={text => {
            setEmail(text);
            dispatch({ type: CONSTANTS.CLEAR_ERROR });
          }}
          value={email}
          message={state.error}
          text={'Please enter a valid email address.'}
          valid={FIELD_VALIDATIONS.email(email)}
        />
        <Input
          placeholder="Password"
          name="password"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
          message={state.error}
          secure={true}
        />
        <ButtonWithoutLogo
          onButtonPress={() => {
            logIn({ email: email.toLowerCase(), password });
          }}
          disabled={!FIELD_VALIDATIONS.email(email)}
          name="invalid"
          buttonTitle={'LOG IN'}
          containerStyle={styles.buttonContainerStyle}
          message={state.error}
          loading={state.loading}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.forgotView}
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.forgotTextStyle}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonLogoContainer}>
          <ButtonWithLogo
            onButtonPress={() => {
              GLogin();
            }}
            logo={'Google'}
            buttonTitle={'Continue with Google'}
            containerStyle={styles.buttonContainerStyle}
          />
          <ButtonWithLogo
            onButtonPress={() => {
              FBLogin();
            }}
            logo={'Facebook'}
            buttonTitle={'Continue with Facebook'}
            containerStyle={styles.buttonContainerStyle}
          />
          {Platform.OS == 'ios' && (
            <ButtonWithLogo
              onButtonPress={() => { AppleLogin(); }}
              logo={'Apple'}
              buttonTitle={'Continue with Apple'}
              containerStyle={styles.buttonContainerStyle}
            />
          )}
        </View>
        <View>
          <Text style={styles.signUpText}>DON'T HAVE AN ACCOUNT?</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.signUpView}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={[
                styles.signUpText,
                { color: COLORS.poloblue, marginTop: 8 },
              ]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
