import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Linking} from 'react-native';
import {CONSTANTS, ROUTES} from '../constants';
import {
  SplashScreen,
  SignUpScreen,
  SignInScreen,
  DashboardScreen,
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
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigators';

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

  useEffect(() => {
    const getUrlAsync = async () => {
      const url = (await Linking.getInitialURL()) ?? '';
      _handleOpenURL({url});
    };
    getUrlAsync();
  }, []);

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
    headerStyle: {backgroundColor: COLORS.lightwhite, elevation: 0},
  };
  const blackHeaderBackOption = {
    headerTitle: '',
    headerStyle: {backgroundColor: COLORS.base, elevation: 0},
    headerTintColor: COLORS.white,
  };

  if (loading.isActiveSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {state.authenticated ? (
          <Stack.Screen
            name={ROUTES.DASHBOARD}
            component={DashboardScreen}
            options={whiteHeaderBackOption}
          />
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
  );
};

export {AppNavigation};
