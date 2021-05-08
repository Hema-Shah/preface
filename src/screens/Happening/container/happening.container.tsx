import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
  Share,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from 'theme';
import styles from '../style/happening.style';
import {SearchHeader} from '../../../components';
import Happening from '../../../assets/svgs/happening.svg';
import Ticket from '../../../assets/svgs/ticket.svg';
import Calendar from '../../../assets/svgs/calendar.svg';
import {useDispatch, useSelector} from 'react-redux';
import {EVENT} from '../../../constants';
import {RootState} from 'redux/reducers';
import {eventStateIF} from 'redux/reducers/eventReducer';
import Sharable from 'assets/svgs/share.svg';
import ActiveHeart from 'assets/svgs/heart/active_heart.svg';
import InActiveHeart from 'assets/svgs/heart/inactive_heart.svg';
import {mapTime} from '../../../helper';

interface Props {
  navigation: any;
}

export function HappeningScreen({navigation}: Props) {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const state = useSelector((state: RootState): eventStateIF => state.event);

  useEffect(() => {
    dispatch({type: EVENT.CURRENT_GET_ALL_EVENT_REQUESTED});
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.eventContainer}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('HappeningEventDetail', {item});
        }}>
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
            {/* <InActiveHeart /> */}
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
      </TouchableOpacity>
    );
  };

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

  const renderLoader = () => {
    return state.loading ? (
      <View style={{paddingVertical: 8}}>
        <ActivityIndicator animating size={'large'} color={COLORS.base} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.mainContainer}>
      <SearchHeader
        placeholder={'SEARCH FOR EVENTS'}
        value={search}
        onChangeText={text => {
          setSearch(text);
        }}
      />
      <View style={styles.lableContainer}>
        <Happening />
        <View style={styles.lableSubContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Alert.alert('Your Tickets');
            }}>
            <Ticket />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Your Tickets</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Alert.alert('Calendar');
            }}>
            <Calendar />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Calendar</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.trendingTextStyle}>Trending Events</Text>
        <FlatList
          data={state.eventData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderLoader}
        />
      </View>
    </View>
  );
}
