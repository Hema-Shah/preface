import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.PROFILE}>
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const ProfileNavigator = () => {
    return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <ProfileStack />
    </Fragment>
    )
}

export { ProfileNavigator}
