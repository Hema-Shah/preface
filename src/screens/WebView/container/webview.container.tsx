import React, {useRef, useEffect} from 'react';
import {ActivityIndicator, View, BackHandler, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/webview.style';
import {WebView as RNWebView} from 'react-native-webview';
import {COLORS} from 'theme';
import { renderHTMLContent } from 'helpers/lib';


interface Props {
  navigation: any;
  route: any;
}

export function WebView({navigation,route}: Props) {
  const webviewRef = useRef(null);
  const dispatch = useDispatch();

  const {
    params: {id},
  } = route;

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Leave Checkout?',
        "Are you sure you want to leave checkout? The items you've selected may not be available later.",
        [
          {
            text: 'Stay',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Leave', onPress: () => navigation.goBack()},
        ],
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const renderLoading = () => (
    <View style={styles.loader}>
      <ActivityIndicator color={COLORS.base} size="large" />
    </View>
  );

  return (
    <RNWebView
      originWhitelist={['*']}
      source={{html: renderHTMLContent(id)}}
      onError={(error) => {
        console.log("GETTING ERROR --> ", error);
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      renderLoading={() => renderLoading()}
      ref={webviewRef}
      style={{flex:1}}
      onNavigationStateChange={(navState)=>{
        console.log("STATE ==>",navState)
      }}
    />
  );
}
