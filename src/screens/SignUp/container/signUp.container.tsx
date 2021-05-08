import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Animated,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/signUp.style';
import MainLogo from '../../../assets/svgs/main_logo.svg';
import {
  ButtonWithoutLogo,
  ButtonWithLogo,
  Input,
} from '../../../components';
import {COLORS} from 'theme';
import {CONSTANTS, FIELD_VALIDATIONS} from '../../../constants/index';
import {GoogleSignin, statusCodes} from 'react-native-login-google';
import {
  AccessToken,
  GraphRequestManager,
  GraphRequest,
  LoginManager,
} from 'react-native-fbsdk';
import {GoogleConfig} from '../../../components/GoogleConfig';
import {RootState} from 'redux/reducers';
import {authStateIF} from 'redux/reducers/authReducer';

interface Props {
  navigation: any;
}

export interface ISignUpData {
  email: string;
  password: string;
  confirm_password: string;
}

export function SignUpScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const keyboardAnim = useRef(new Animated.Value(150)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  GoogleSignin.configure();

  useEffect(() => {
    GoogleConfig();
    dispatch({type: CONSTANTS.CLEAR_ERROR});
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    return () => {
      dispatch({type: CONSTANTS.CLEAR_ERROR});
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const signUp = (signUpData: ISignUpData) => {
    dispatch({type: CONSTANTS.SIGNUP_REQUESTED, payload: {signUpData}});
  };

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

  const signIn = async () => {
    console.log('LOgin');
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      dispatch({type: CONSTANTS.GOOGLE_LOGIN_REQUESTED, payload: {userinfo}});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  const FBLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result: any) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            let accessToken = data.accessToken;
            const responseInfoCallback = (error: any, fbuserInfo: any) => {
              if (error) {
                console.log(error);
                console.log('Error==>', error);
              } else {
                dispatch({
                  type: CONSTANTS.GOOGLE_LOGIN_REQUESTED,
                  payload: {fbuserInfo, accessToken},
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
                      'email,name,first_name,middle_name,last_name,picture.type(large)',
                  },
                },
              },
              responseInfoCallback,
            );
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
    );
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
        <Text style={styles.welcomeTextStyle}>Join Preface</Text>
      </View>
      <KeyboardAvoidingView style={styles.thirdSubContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          bounces={false}>
          <View style={styles.subScrollView}>
            <Input
              placeholder="*Email"
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
            <Input
              placeholder="*Password"
              name="password"
              onChangeText={text => {
                setPassword(text);
              }}
              value={password}
              message={state.error}
              secure={true}
            />
            <Input
              placeholder="*Confirm Password"
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
                signUp({
                  email: email.toLowerCase().trim(),
                  password,
                  confirm_password,
                });
              }}
              disabled={!FIELD_VALIDATIONS.email(email)}
              name="invalid"
              buttonTitle={'SIGN UP'}
              containerStyle={styles.buttonContainerStyle}
              message={state.error}
              loading={state.loading}
            />
            <View style={styles.buttonLogoContainer}>
              <ButtonWithLogo
                onButtonPress={() => {
                  signIn();
                  // console.log('GOOGLE LOGIN');
                }}
                logo={'Google'}
                buttonTitle={'Continue with Google'}
                containerStyle={styles.buttonContainerStyle}
              />
              <ButtonWithLogo
                onButtonPress={() => {
                  FBLogin();
                  // console.log('FACEBOOK LOGIN');
                }}
                logo={'Facebook'}
                buttonTitle={'Continue with Facebook'}
                containerStyle={styles.buttonContainerStyle}
              />
              {Platform.OS == 'ios' && (
                <ButtonWithLogo
                  onButtonPress={() => {
                    console.log('APPLE LOGIN');
                  }}
                  logo={'Apple'}
                  buttonTitle={'Continue with Apple'}
                  containerStyle={styles.buttonContainerStyle}
                />
              )}
            </View>
            <View>
              <Text style={styles.signUpText}>ALREADY HAVE AN ACCOUNT?</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('SignIn');
                }}>
                <Text
                  style={[
                    styles.signUpText,
                    {textDecorationLine: 'underline', color: COLORS.lightblue},
                  ]}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
