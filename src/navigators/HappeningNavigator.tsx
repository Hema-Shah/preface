import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HappeningScreen, HappeningEventDetailScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const HappeningStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HAPPENING} screenOptions={{headerShown:false}}>
      <Stack.Screen
        name={ROUTES.HAPPENING}
        component={HappeningScreen}
      />
      <Stack.Screen
        name={ROUTES.HAPPENING_EVENT_DETAIL}
        component={HappeningEventDetailScreen}
      />
    </Stack.Navigator>
  );
};

const HappeningNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <HappeningStack />
    </Fragment>
  );
};

export {HappeningNavigator};
