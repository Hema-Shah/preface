import React,{useRef,useEffect} from 'react';
import {ActivityIndicator, View,BackHandler,Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../style/webview.style';
import {WebView as RNWebView} from 'react-native-webview';
import {COLORS} from 'theme';

interface Props {
  navigation: any;
}

export function WebView({navigation}: Props) {
  const webviewRef = useRef(null)
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Leave Checkout?", "Are you sure you want to leave checkout? The items you've selected may not be available later.", [
        {
          text: "Stay",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Leave", onPress: () => navigation.goBack() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
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
      automaticallyAdjustContentInsets={false}
      source={{uri: `https://www.eventbrite.com/static/widgets/eb_widgets.js`}}
      decelerationRate='normal'
      startInLoadingState={true}
      renderLoading={() => renderLoading()}
      ref={webviewRef}
      style={{flex:1}}
      onNavigationStateChange={(navState)=>{
        console.log("NAV STATE ==>",navState)
      }}
    />
  );
}
