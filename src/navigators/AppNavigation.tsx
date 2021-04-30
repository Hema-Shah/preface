import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';
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
} from 'screens​';
import {COLORS} from 'theme';
import {RootState} from 'redux/reducers';
import {splashStateIF} from 'redux/reducers/splashReducer';
import {authStateIF} from 'redux/reducers/authReducer';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigators';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const loading = useSelector(
    (state: RootState): splashStateIF => state.splash,
  );
  const state = useSelector((state: RootState): authStateIF => state.auth);

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

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {loading.isActiveSplash ? (
          <Stack.Screen
            name={ROUTES.SPLASH}
            component={SplashScreen}
            options={options}
          />
        ) : state.authenticated ? (
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
