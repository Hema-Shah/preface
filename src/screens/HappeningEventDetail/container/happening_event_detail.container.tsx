import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import styles from '../style/happening_event_detail.style';
import {ButtonWithoutLogo} from '../../../components';
import Sharable from 'assets/svgs/share.svg';
import HTMLView from 'react-native-render-html';
import ActiveHeart from 'assets/svgs/heart/active_heart.svg';
import InActiveHeart from 'assets/svgs/heart/inactive_heart.svg';
import Success from 'assets/svgs/success.svg';
import {mapTime} from '../../../helpers';
import {ROUTES} from '../../../constants';

interface Props {
  navigation: any;
  route: any;
}

export function HappeningEventDetailScreen({route, navigation}: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    params: {item},
  } = route;

  const onShare = async (item: any) => {
    try {
      await Share.share(
        {
          message: item.url,
          url: item.url,
          title: `You're invited to ${item.name.text}`,
        },
        {
          dialogTitle: item.name.text,
        },
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={[styles.mainContainer, {opacity: modalVisible ? 0.1 : 1}]}>
      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredSubView}>
            <Success />
            <View style={styles.successOrderTextContainer}>
              <Text style={styles.orderSuccess}>Order successful!</Text>
              <Text style={styles.seeEventText}>See you at the event!</Text>
            </View>
          </View>
          <ButtonWithoutLogo
            buttonTitle="VIEW YOUR TICKET"
            onButtonPress={() => {
              // openInbox();
            }}
          />
          <ButtonWithoutLogo
            buttonTitle="DISCOVER MORE EVENTS"
            onButtonPress={() => {
              // navigation.navigate('SignIn');
            }}
            containerStyle={styles.discoverBtn}
            buttonTextStyle={styles.discoverText}
          />
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.eventContainer}>
          <Image
            source={{uri: item.logo.url}}
            style={styles.eventImageStyle}
            resizeMode="stretch"
          />
          <View style={styles.eventSubContainer}>
            <View style={styles.eventFirstSubContainer}>
              <Text style={styles.lableNameStyle}>{item.name.text}</Text>
              <Text style={styles.labelDateStyle}>
                {mapTime(item.start.local)}
              </Text>
              <Text style={styles.lableDescStyle}>
                {item.venue.name +
                  ' ' +
                  '\u25CF' +
                  ' ' +
                  item.venue.address.city +
                  ',' +
                  item.venue.address.region}
              </Text>
            </View>
            <View style={styles.eventSecondSubContainer}>
              {/* <ActiveHeart /> */}
              {item.shareable == true && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    onShare(item);
                  }}>
                  <Sharable />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{padding: 12}}>
            <Text style={styles.textStyle}>{item.summary}</Text>
            {/* <Text style={styles.aboutTextStyle}>{'About this Event'}</Text> */}
            <HTMLView
              source={{html:item.organizer.description.html}}
              tagsStyles={{p:styles.summuryTextStyle}}
            />
            {/* <Text style={styles.summuryTextStyle}>{item.organizer.description.text}</Text> */}
          </View>
          <ButtonWithoutLogo
            onButtonPress={() => {
              navigation.navigate(ROUTES.WEBVIEW, {id: item.id});
            }}
            // disabled={!FIELD_VALIDATIONS.email(email)}
            name="invalid"
            buttonTitle={'REGISTER NOW'}
            containerStyle={styles.registerBtnStyle}
            // message={state.error}
            // loading={state.loading}
          />
        </View>
      </ScrollView>
    </View>
  );
}
