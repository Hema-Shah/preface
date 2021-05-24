import React, {useRef, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from '../style/webview.style';
import {WebView as RNWebView} from 'react-native-webview';
import {COLORS} from 'theme';
import { CONFIG } from 'config';


interface Props {
  navigation: any;
  route: any;
}

export function WebView({navigation,route}: Props) {

  const {
    params: {id},
  } = route;

  const renderLoading = () => (
    <View style={styles.loader}>
      <ActivityIndicator color={COLORS.base} size="large" />
    </View>
  );

  return (
    <RNWebView
      source={{uri: `${CONFIG.apiURL}event-payment-checkout/${id}`}}
      startInLoadingState={true}
      renderLoading={() => renderLoading()}
    />
  );
}
