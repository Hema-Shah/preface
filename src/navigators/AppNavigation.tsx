import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Linking, Alert} from 'react-native';
import {
  SplashScreen,
  SignUpScreen,
  SignInScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  CheckEmailScreen,
  OpenEmailScreen,
  UpdatePasswordScreen,
} from '../screens';
import {COLORS} from 'theme';
import {RootState} from 'redux/reducers';
import {splashStateIF} from 'redux/reducers/splashReducer';
import {authStateIF} from 'redux/reducers/authReducer';
import {deepStateIF} from 'redux/reducers/deepReducer';
import {navigationRef} from '../navigators';
import {CONSTANTS, ROUTES} from '../constants';
import {AppLinkHandler} from '../boot';
import {TabNavigation} from './TabNavigation';
import {GoogleConfig} from 'config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export interface IDeepLinkData {
  url: string;
}

const AppNavigation = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState): splashStateIF => state.splash,
  );
  const state = useSelector((state: RootState): authStateIF => state.auth);
  const deep = useSelector((state: RootState): deepStateIF => state.deep);

  useEffect(() => {
    GoogleConfig();
    dispatch({type: CONSTANTS.GET_EVENTBRITE_CONFIG_REQUESTED})
    const getUrlAsync = async () => {
      const url = (await Linking.getInitialURL()) ?? '';
      _handleOpenURL({url});
    };
    getUrlAsync();
  }, []);

  useEffect(() => {
    if (typeof deep.message === 'object' && deep.message.invalid) {
      Alert.alert(
        'Error',
        deep.message.invalid[0],
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch({type: CONSTANTS.CLEAR_DEEP_LINK_ERROR});
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [deep.message]);

  const _handleOpenURL = async (deepLink: IDeepLinkData) => {
    if (deepLink.url != '') {
      dispatch({
        type: CONSTANTS.DEEP_LINK_REQUESTED,
        payload: {url: deepLink.url},
      });
    }
  };

  const options = {
    headerShown: false,
  };
  const whiteHeaderBackOption = {
    headerTitle: '',
    headerStyle: {
      backgroundColor: COLORS.lightwhite,
      elevation: 0,
      shadowOpacity: 0,
    },
  };
  const blackHeaderBackOption = {
    headerTitle: '',
    headerStyle: {backgroundColor: COLORS.base, elevation: 0, shadowOpacity: 0},
    headerTintColor: COLORS.white,
  };

  if (loading.isActiveSplash) {
    return <SplashScreen />;
  }

  return (
    <AppLinkHandler>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            {state.authenticated ? (
              <>
                <Stack.Screen
                  name={ROUTES.HOME}
                  component={TabNavigation}
                  options={options}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name={ROUTES.SIGNIN}
                  component={SignInScreen}
                  options={options}
                />
                <Stack.Screen
                  name={ROUTES.SIGNUP}
                  component={SignUpScreen}
                  options={options}
                />
                <Stack.Screen
                  name={ROUTES.FORGOT_PASSWORD}
                  component={ForgotPasswordScreen}
                  options={blackHeaderBackOption}
                />
                <Stack.Screen
                  name={ROUTES.RESET_PASSWORD}
                  component={ResetPasswordScreen}
                  options={whiteHeaderBackOption}
                />
                <Stack.Screen
                  name={ROUTES.CHECK_EMAIL}
                  component={CheckEmailScreen}
                  options={options}
                />
                <Stack.Screen
                  name={ROUTES.OPEN_EMAIL}
                  component={OpenEmailScreen}
                  options={whiteHeaderBackOption}
                />
                <Stack.Screen
                  name={ROUTES.UPDATE_PASSWORD}
                  component={UpdatePasswordScreen}
                  options={whiteHeaderBackOption}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppLinkHandler>
  );
};

export {AppNavigation};
