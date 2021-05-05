import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, Linking} from 'react-native';
import {CONSTANTS} from '../constants';

const componentStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});

interface IDeepLinkData {
  url: string;
}

const AppLinkHandler = ({children}: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Linking.addEventListener('url', event => {
      _handleOpenURL(event);
    });
    return () => {
      Linking.removeEventListener('url', event => {
        _handleOpenURL(event);
      });
    };
  }, []);

  const _handleOpenURL = async (deepLink: IDeepLinkData) => {
    if (deepLink.url != '') {
      dispatch({
        type: CONSTANTS.DEEP_LINK_REQUESTED,
        payload: {url: deepLink.url},
      });
    }
  };

  return <View style={componentStyle.mainContainer}>{children}</View>;
};

export {AppLinkHandler};
