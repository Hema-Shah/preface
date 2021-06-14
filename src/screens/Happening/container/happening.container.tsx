import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
  Share,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import { COLORS } from 'theme';
import styles from '../style/happening.style';
import { SearchHeader } from '../../../components';
import Happening from '../../../assets/svgs/happening.svg';
import Ticket from '../../../assets/svgs/ticket.svg';
import Calendar from '../../../assets/svgs/calendar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { EVENT, ROUTES } from '../../../constants';
import { RootState } from 'redux/reducers';
import { eventStateIF } from 'redux/reducers/eventReducer';
import Sharable from 'assets/svgs/share.svg';
import ActiveHeart from 'assets/svgs/heart/active_heart.svg';
import InActiveHeart from 'assets/svgs/heart/inactive_heart.svg';
import { mapTime } from '../../../helpers';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  navigation: any;
}

export function HappeningScreen({ navigation }: Props) {
  const state = useSelector((state: RootState): eventStateIF => state.event);
  const [search, setSearch] = useState('');

  const [filterDataSource, setFilterDataSource] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: EVENT.CURRENT_GET_ALL_EVENT_REQUESTED });
  }, []);

  useLayoutEffect(() => {
    setFilterDataSource(state.eventData);
  }, [state.eventData]);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          dispatch({
            type: EVENT.GET_STRUCTURED_CONTENT_REQUESTED,
            payload: { id: item.id },
          });
          navigation.navigate(ROUTES.HAPPENING_EVENT_DETAIL, { item });
        }}>
        <Image
          source={{ uri: item.logo.url }}
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
              {item.venue != null
                ? item.venue.name +
                ' ' +
                '\u2022' +
                ' ' +
                item.venue.address.city +
                ', ' +
                item.venue.address.region
                : 'N/A'}
            </Text>
          </View>
          <View style={styles.eventSecondSubContainer}>
            {/* <ActiveHeart /> */}
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

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      const newData = state.eventData.filter(function (item: any) {
        const itemData = item.name.text
          ? item.name.text.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilterDataSource(state.eventData);
      setSearch(text);
    }
  };

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

  const renderSeparator = () => <View style={styles.eventSeparator} />;

  const renderLoader = () => {
    return state.loading ? (
      <View style={styles.noEvent}>
        <ActivityIndicator animating size={'large'} color={COLORS.base} />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <SearchHeader
        placeholder={'SEARCH FOR EVENTS'}
        value={search}
        onChangeText={text => {
          searchFilterFunction(text);
        }}
      />
      <View style={styles.lableContainer}>
        <Happening />
        <View style={styles.lableSubContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // navigation.navigate(ROUTES.HAPPENING_TICKETS);
            }}>
            <Ticket />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Your Tickets</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // Alert.alert('Calendar');
            }}>
            <Calendar />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Calendar</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.trendingTextStyle}>Trending Events</Text>
        {_.isEmpty(filterDataSource) && !state.loading ? (
          <View style={styles.noEvent}>
            <Text style={styles.noEventTextStyle}>{"No events found."}</Text>
          </View>
        ) : (
          <FlatList
            data={filterDataSource}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderLoader}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
