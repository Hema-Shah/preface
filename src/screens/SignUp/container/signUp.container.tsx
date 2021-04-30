import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../style/signUp.style';
import MainLogo from '../../../assets/svgs/main_logo.svg';
import {
  ButtonWithoutLogo,
  ButtonWithLogo,
  TextInput,
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
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): authStateIF => state.auth);

  GoogleSignin.configure();

  useEffect(() => {
    GoogleConfig();
    dispatch({type: CONSTANTS.CLEAR_ERROR});
    return () => {
      dispatch({type: CONSTANTS.CLEAR_ERROR});
    };
  }, []);

  useEffect(() => {
    if (state.error && state.error.length > 0) {
      Alert.alert(
        'Error',
        state.error,
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
              dispatch({type: CONSTANTS.CLEAR_ERROR});
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [state.error]);

  const signUp = (signUpData: ISignUpData) => {
    dispatch({type: CONSTANTS.SIGNUP_REQUESTED, payload: {signUpData}});
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
      <View style={styles.firstSubContainer}>
        <MainLogo />
      </View>
      <View style={styles.secondSubContainer}>
        <Text style={styles.welcomeTextStyle}>Join Preface</Text>
      </View>
      <KeyboardAvoidingView style={styles.thirdSubContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
          bounces={false}>
          <View style={styles.subScrollView}>
            <TextInput
              placeholder="*Email"
              name="email"
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
              message={state.error}
            />
            <TextInput
              placeholder="*Password"
              name="password"
              onChangeText={text => {
                setPassword(text);
              }}
              value={password}
              message={state.error}
              secure={true}
            />
            <TextInput
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
                  email: email.toLowerCase(),
                  password,
                  confirm_password,
                });
                // console.log('SIGN UP');
              }}
              buttonTitle={'SIGN UP'}
              containerStyle={styles.buttonContainerStyle}
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
