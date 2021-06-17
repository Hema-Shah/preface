import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constants';
import { COLORS } from 'theme';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { HappeningNavigator } from './HappeningNavigator';
import { TechNewsNavigator } from './TechNewsNavigator';
import { PrefaceNavigator } from './PrefaceNavigator';
import { NotificationNavigator } from './NotificationNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import Logo from '../assets/svgs/logo_small.svg';
import ActivePost from '../assets/svgs/post/active_post.svg';
import InActivePost from '../assets/svgs/post/inactive_post.svg';
import ActiveEvent from '../assets/svgs/event/active_event.svg';
import InActiveEvent from '../assets/svgs/event/inactive_event.svg';
import ActiveUpdate from '../assets/svgs/update/active_bell.svg';
import InActiveUpdate from '../assets/svgs/update/inactive_bell.svg';
import ActiveProfile from '../assets/svgs/profile/active_profile.svg';
import InActiveProfile from '../assets/svgs/profile/inactive_profile.svg';

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: COLORS.lightgrey,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
    borderRadius: 35,
  },
});

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ onPress, focused }: any) => (
  <TouchableOpacity
    style={styles.logoContainer}
    onPress={onPress}
    activeOpacity={1}>
    <Logo />
  </TouchableOpacity>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HAPPENING_TAB}
      tabBarOptions={{
        activeTintColor: COLORS.poloblue,
        showLabel: false,
        style: { borderTopColor: COLORS.lightgrey, borderTopWidth: 2 },
        safeAreaInsets: { bottom: Platform.OS == "ios" ? 48 : 20 },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name={ROUTES.TECH_NEWS_TAB}
        component={TechNewsNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActivePost /> : <InActivePost />,
        }}
      />
      <Tab.Screen
        name={ROUTES.HAPPENING_TAB}
        component={HappeningNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveEvent /> : <InActiveEvent />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PREFACE_TAB}
        component={PrefaceNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATION_TAB}
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveUpdate /> : <InActiveUpdate />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE_TAB}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveProfile /> : <InActiveProfile />,
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigation };
