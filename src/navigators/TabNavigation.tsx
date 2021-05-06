import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants';
import {
  EventScreen,
  CalendarScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import {COLORS} from 'theme';
import {View, StyleSheet} from 'react-native';
import Logo from '../assets/svgs/logo_small.svg';
import ActivePost from '../assets/svgs/post/active_post.svg'
import InActivePost from '../assets/svgs/post/inactive_post.svg'
import ActiveEvent from '../assets/svgs/event/active_event.svg'
import InActiveEvent from '../assets/svgs/event/inactive_event.svg'
import ActiveUpdate from '../assets/svgs/update/active_bell.svg'
import InActiveUpdate from '../assets/svgs/update/inactive_bell.svg'
import ActiveProfile from '../assets/svgs/profile/active_profile.svg'
import InActiveProfile from '../assets/svgs/profile/inactive_profile.svg'

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: COLORS.lightgrey,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    top: -24,
    borderRadius: 35,
  },
});

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.EVENT}
      tabBarOptions={{
        activeTintColor: COLORS.poloblue,
        showLabel: false,
        style:{borderTopColor:COLORS.lightgrey,borderTopWidth:2}
      }}>
      <Tab.Screen
        name={ROUTES.EVENT}
        component={EventScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <ActivePost /> : <InActivePost />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CALENDAR}
        component={CalendarScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <ActiveEvent /> : <InActiveEvent />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.LOGO}
        component={CalendarScreen}
        options={{
          tabBarButton: () => (
            <View style={styles.logoContainer}>
              <Logo />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATION}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <ActiveUpdate /> : <InActiveUpdate />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            focused ? <ActiveProfile /> : <InActiveProfile />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
