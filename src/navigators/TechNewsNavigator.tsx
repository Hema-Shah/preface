import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TechNewsScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const TechNewsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.TECH_NEWS}>
      <Stack.Screen name={ROUTES.TECH_NEWS} component={TechNewsScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const TechNewsNavigator = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <TechNewsStack />
    </Fragment>
  );
};

export {TechNewsNavigator};
