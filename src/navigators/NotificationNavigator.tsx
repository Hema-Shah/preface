import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NotificationScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.NOTIFICATION}>
      <Stack.Screen name={ROUTES.NOTIFICATION} component={NotificationScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const NotificationNavigator = () => {
    return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <NotificationStack />
    </Fragment>
    )
}

export {NotificationNavigator}
