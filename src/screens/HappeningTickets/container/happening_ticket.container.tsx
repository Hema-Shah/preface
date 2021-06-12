import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchHeader, TicketView} from '../../../components';
import styles from '../style/happening_ticket.style';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from 'theme';
import Preface from 'assets/svgs/preface_mini.svg';
import TicketBG from 'assets/svgs/ticketBG.svg';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/reducers';
import {eventStateIF} from 'redux/reducers/eventReducer';
import {EVENT} from 'constants/EventConst';
import {mapTimeWithYear} from 'helpers/lib';

interface Props {
  navigation: any;
}

const UpcomingRoute = () => {
  const state = useSelector((state: RootState): eventStateIF => state.event);
  const renderItem = ({item}: any) => {
    console.log('Item ==>', item);
    return (
      <TouchableOpacity style={styles.upcomingTicketContainet}>
        {/* <TicketView/> */}
        <View style={styles.upcomingFirstSubContainer}></View>
        <View style={styles.upcomingSecondSubContainer}>
          <View style={{width: '15%', alignItems: 'center'}}>
            <Preface />
          </View>
          <View style={{width: '85%', justifyContent: 'center'}}>
            <Text style={styles.titleTextStyle}>{item.event.name.text}</Text>
            <Text style={styles.descTextStyle}>
              {item.event.venue != null
                ? item.event.venue.name +
                  ' ' +
                  '\u2022' +
                  ' ' +
                  item.event.venue.address.city +
                  ', ' +
                  item.event.venue.address.region
                : 'N/A'}
            </Text>
          </View>
        </View>
        <View style={styles.upcomingThirdSubContainer}>
          <Text style={styles.dateTextStyle}>{'Date'}</Text>
          <Text style={styles.formattedDateTextStyle}>
            {mapTimeWithYear(item.event.start.local)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return state.loading ? (
      <View style={{paddingVertical: 8}}>
        <ActivityIndicator animating size={'large'} color={COLORS.base} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.wrapperContainer}>
      <FlatList
        data={state.upcomingTickets}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        ListEmptyComponent={renderLoader}
      />
    </View>
  );
};

const PastRoute = () => {
  const state = useSelector((state: RootState): eventStateIF => state.event);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.upcomingTicketContainet}>
        {/* <TicketView/> */}
        <View style={styles.upcomingFirstSubContainer}></View>
        <View style={styles.upcomingSecondSubContainer}>
          <View style={{width: '15%', alignItems: 'center'}}>
            <Preface />
          </View>
          <View style={{width: '85%', justifyContent: 'center'}}>
            <Text style={styles.titleTextStyle}>{item.event.name.text}</Text>
            <Text style={styles.descTextStyle}>
              {item.event.venue != null
                ? item.event.venue.name +
                  ' ' +
                  '\u2022' +
                  ' ' +
                  item.event.venue.address.city +
                  ', ' +
                  item.event.venue.address.region
                : 'N/A'}
            </Text>
          </View>
        </View>
        <View style={styles.upcomingThirdSubContainer}>
          <Text style={styles.dateTextStyle}>{'Date'}</Text>
          <Text style={styles.formattedDateTextStyle}>
            {mapTimeWithYear(item.event.start.local)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return state.loading ? (
      <View style={{paddingVertical: 8}}>
        <ActivityIndicator animating size={'large'} color={COLORS.base} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.wrapperContainer}>
      <FlatList
        data={state.pastTickets}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        ListEmptyComponent={renderLoader}
      />
    </View>
  );
};

export function HappeningTicketScreen({navigation}: Props) {
  const {width} = useWindowDimensions();

  const [search, setSearch] = useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'past', title: 'Past tickets'},
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: EVENT.GET_TICKET_REQUESTED});
  }, []);

  const renderScene = SceneMap({
    upcoming: UpcomingRoute,
    past: PastRoute,
  });

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        renderLabel={({route, color, focused}) => (
          <Text style={[styles.renderTextStyle, {color: color}]}>
            {route.title}
          </Text>
        )}
        activeColor={COLORS.base}
        inactiveColor={COLORS.lightgrey}
        style={styles.tabContainerStyle}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <SearchHeader
        placeholder={'SEARCH FOR EVENTS'}
        value={search}
        showHeaderBack={true}
        onBackPress={() => {
          navigation.goBack();
        }}
        onChangeText={text => {
          setSearch(text);
        }}
      />
      <View style={{marginVertical: 18}}>
        <Text style={styles.ticketTextStyle}>{'Your Tickets'}</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: width}}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
