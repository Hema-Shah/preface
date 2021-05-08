import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Share, Alert} from 'react-native';
import styles from '../style/happening_event_detail.style';
import {ButtonWithoutLogo} from '../../../components';
import {SearchHeader} from '../../../components';
import Sharable from 'assets/svgs/share.svg';
import ActiveHeart from 'assets/svgs/heart/active_heart.svg';
import InActiveHeart from 'assets/svgs/heart/inactive_heart.svg';
import {mapTime} from '../../../helper';

interface Props {
  navigation: any;
  route: any;
}

export function HappeningEventDetailScreen({route,navigation}: Props) {
  const [search, setSearch] = useState('');
  const {
    params: {item},
  } = route;

  const onShare = async (item: any) => {
    try {
      await Share.share(
        {
          message: item.description.text,
          url: item.url,
          title: 'React Native',
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
    <View style={styles.mainContainer}>
      <SearchHeader
        placeholder={'SEARCH FOR EVENTS'}
        value={search}
        showHeaderBack={true}
        onBackPress={()=>{navigation.goBack()}}
        onChangeText={text => {
          setSearch(text);
        }}
      />
      <View style={styles.eventContainer}>
        <Image
          source={{uri: item.logo.url}}
          style={styles.eventImageStyle}
          resizeMode="stretch"
        />
        <View style={styles.eventSubContainer}>
          <View style={styles.eventFirstSubContainer}>
            <Text style={styles.lableNameStyle}>{item.name.text}</Text>
            <Text style={styles.labelDateStyle}>{mapTime(item.created)}</Text>
            <Text style={styles.lableDescStyle}>{"Preface Coffee & Wine"}</Text>
          </View>
          <View style={styles.eventSecondSubContainer}>
            <ActiveHeart />
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
        <View style={{padding:12}}>
          <Text style={styles.textStyle}>{item.summary}</Text>
          <Text style={styles.aboutTextStyle}>{"About this Event"}</Text>
          <Text style={styles.summuryTextStyle}>{item.description.text}</Text>
        </View>
        <ButtonWithoutLogo
          onButtonPress={() => {
            // logIn({email: email.toLowerCase().trim(), password});
          }}
          // disabled={!FIELD_VALIDATIONS.email(email)}
          name="invalid"
          buttonTitle={'REGISTER NOW'}
          containerStyle={styles.registerBtnStyle}
          // message={state.error}
          // loading={state.loading}
        />
      </View>
    </View>
  );
}
