import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {COLORS} from 'theme';
import styles from '../style/calendar.style';
import {SearchHeader} from '../../../components';
import Happening from '../../../assets/svgs/happening.svg';
import Ticket from '../../../assets/svgs/ticket.svg';
import Calendar from '../../../assets/svgs/calendar.svg';

export function CalendarScreen() {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
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
          <Ticket />
          <Text style={styles.textStyle}>Your Tickets</Text>
          <Calendar />
          <Text style={styles.textStyle}>Calendar</Text>
        </View>
      </View>
      <View>
        <Text style={styles.trendingTextStyle}>Trending Events</Text>
      </View>
      {/* <Text>CalendarScreen</Text> */}
    </View>
  );
}
