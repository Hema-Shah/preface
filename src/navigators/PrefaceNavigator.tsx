import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PrefaceScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const PrefaceStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.PREFACE}>
      <Stack.Screen name={ROUTES.PREFACE} component={PrefaceScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

const PrefaceNavigator = () => {
    return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <PrefaceStack />
    </Fragment>
    )
}

export {PrefaceNavigator}
