import React, {useState} from 'react';
import {Text, View, useWindowDimensions, FlatList, ActivityIndicator, TouchableOpacity,ImageBackground} from 'react-native';
import {SearchHeader, TicketView} from '../../../components';
import styles from '../style/happening_ticket.style'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from 'theme';
import Preface from 'assets/svgs/preface_mini.svg';
import TicketBG from 'assets/svgs/ticketBG.svg';

interface Props {
  navigation: any;
}

const DATA = [
{
  id: 1,
  name: 'Learn Python & Web Scraping With Any Website Like Nike!',
  description:'Preface Coffee & Wine',
  date:'Wed, April 28. 2021'
},
{
  id: 2,
  name: 'Learn Python & Web Scraping With Any Website Like Nike!',
  description:'Preface Coffee & Wine',
  date:'Wed, April 28. 2021'
},
{
  id: 3,
  name: 'Learn Python & Web Scraping With Any Website Like Nike!',
  description:'Preface Coffee & Wine',
  date:'Wed, April 28. 2021'
},
{
  id: 4,
  name: 'Learn Python & Web Scraping With Any Website Like Nike!',
  description:'Preface Coffee & Wine',
  date:'Wed, April 28. 2021'
},
]


const UpcomingRoute = () => {

  const renderItem = ({item}: any) =>{
    return(
        <TouchableOpacity style={styles.upcomingTicketContainet}>
          {/* <TicketView/> */}
          <View style={styles.upcomingFirstSubContainer}>
          </View>
          <View style={styles.upcomingSecondSubContainer}>
            <View style={{width:"15%",alignItems:'center'}}>
            <Preface />
            </View>
            <View style={{width:"85%",justifyContent:'center'}}>
              <Text style={styles.titleTextStyle}>{item.name}</Text>
              <Text style={styles.descTextStyle}>{item.description}</Text>
            </View>
          </View>
          <View style={styles.upcomingThirdSubContainer}>
            <Text style={styles.dateTextStyle}>{"Date"}</Text>
            <Text style={styles.formattedDateTextStyle}>{item.date}</Text>
          </View>
        </TouchableOpacity>
    );
  } 

  // const renderLoader = () => {
  //   return state.loading ? (
  //     <View style={{paddingVertical: 8}}>
  //       <ActivityIndicator animating size={'large'} color={COLORS.base} />
  //     </View>
  //   ) : null;
  // };

  return (
    <View style={styles.wrapperContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        // ListEmptyComponent={renderLoader}
      />
    </View>
  );
};

const PastRoute = () => <View style={styles.wrapperContainer} />;

export function HappeningTicketScreen({navigation}: Props) {
  const {width} = useWindowDimensions();

  const [search, setSearch] = useState('');
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'upcoming', title: 'Upcoming'},
    {key: 'past', title: 'Past tickets'},
  ]);

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
    <View style={styles.mainContainer}>
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
    </View>
  );
}
