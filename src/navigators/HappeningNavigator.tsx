import React, {Fragment} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HappeningScreen, HappeningEventDetailScreen, WebView, HappeningTicketScreen} from '../screens';
import {StatusBar} from 'react-native';
import {COLORS} from 'theme';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

const HappeningStack = () => {
  const options = {
    headerShown: false,
  };

  const eventDetailOptions = {
    headerTitle: '',
    headerStyle: {backgroundColor: COLORS.white, elevation: 0},
  };

  return (
    <Stack.Navigator initialRouteName={ROUTES.HAPPENING}>
      <Stack.Screen
        name={ROUTES.HAPPENING}
        component={HappeningScreen}
        options={options}
      />
      <Stack.Screen
        name={ROUTES.HAPPENING_EVENT_DETAIL}
        component={HappeningEventDetailScreen}
        options={eventDetailOptions}
      />
      <Stack.Screen
        name={ROUTES.HAPPENING_TICKETS}
        component={HappeningTicketScreen}
        options={options}
      />
      <Stack.Screen
        name={ROUTES.WEBVIEW}
        component={WebView}
        options={options}
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
