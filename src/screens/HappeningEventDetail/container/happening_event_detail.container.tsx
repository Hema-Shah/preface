import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Alert,
  Modal,
} from 'react-native';
import styles from '../style/happening_event_detail.style';
import {ButtonWithoutLogo} from '../../../components';
import Sharable from 'assets/svgs/share.svg';
import {Card, RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import ActiveHeart from 'assets/svgs/heart/active_heart.svg';
import InActiveHeart from 'assets/svgs/heart/inactive_heart.svg';
import Success from 'assets/svgs/success.svg';
import {mapStartEndTime, mapTime} from '../../../helpers';
import {COLORS} from 'theme';
import {ROUTES} from '../../../constants';

interface Props {
  navigation: any;
  route: any;
}

export function HappeningEventDetailScreen({route, navigation}: Props) {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
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

  const LeftContent = () => (
    <RadioButton
      value="first"
      status={'checked'}
      onPress={() => {}}
      color={COLORS.poloblue}
    />
  );

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
            <Text style={styles.lableDescStyle}>{'Preface Coffee & Wine'}</Text>
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
        {!isRegister ? (
          <View style={{padding: 12}}>
            <Text style={styles.textStyle}>{item.summary}</Text>
            <Text style={styles.aboutTextStyle}>{'About this Event'}</Text>
            <Text style={styles.summuryTextStyle}>{item.description.text}</Text>
          </View>
        ) : (
          <Card style={styles.cardContainer}>
            <Card.Title
              title={mapStartEndTime(item.start.local, item.end.local)}
              subtitle="Preface Coffee & Wine"
              titleStyle={styles.cardTitle}
              subtitleStyle={styles.cardSubtitle}
              left={LeftContent}
              leftStyle={styles.cardLeft}
            />
            <Card.Content>
              <Text style={styles.cardContentTitle}>
                {item.is_free ? 'Free!' : 'Paid'}
              </Text>
            </Card.Content>
            <Card.Content style={styles.cardBottomContainer}>
              <Icon
                name="person"
                size={24}
                color={COLORS.base}
                style={styles.personIcon}
              />
              <View style={styles.pickerStyle}>
                <Picker
                  selectedValue={selectedPerson}
                  mode="dialog"
                  dropdownIconColor={COLORS.poloblue}
                  style={{height: 40}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedPerson(itemValue)
                  }>
                  {[...Array(10)].map((_, i) => {
                    return (
                      <Picker.Item label={`0${i}`} value={`0${i}`} key={i} />
                    );
                  })}
                </Picker>
              </View>
            </Card.Content>
          </Card>
        )}
        <ButtonWithoutLogo
          onButtonPress={() => {
            !isRegister
              ? setIsRegister(true)
              : navigation.navigate(ROUTES.WEBVIEW,{id: item.id});
          }}
          // disabled={!FIELD_VALIDATIONS.email(email)}
          name="invalid"
          buttonTitle={!isRegister ? 'REGISTER NOW' : 'CONFIRM'}
          containerStyle={styles.registerBtnStyle}
          // message={state.error}
          // loading={state.loading}
        />
      </View>
    </View>
  );
}
