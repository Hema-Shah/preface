import React, { useRef, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from '../style/webview.style';
import { WebView as RNWebView } from 'react-native-webview';
import { COLORS } from 'theme';
import { CONFIG } from 'config';
import { SafeAreaView } from 'react-native-safe-area-context';


interface Props {
  navigation: any;
  route: any;
}

export function WebView({ navigation, route }: Props) {

  const {
    params: { id },
  } = route;

  const renderLoading = () => (
    <View style={styles.loader}>
      <ActivityIndicator color={COLORS.base} size="large" />
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <RNWebView
        source={{ uri: `${CONFIG.apiURL}event-payment-checkout/${id}` }}
        startInLoadingState={true}
        renderLoading={() => renderLoading()}
      />
    </SafeAreaView>
  );
}
