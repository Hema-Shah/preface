import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 32,
  },
  eventContainer: {
    marginVertical: 12,
  },
  eventSubContainer: {flexDirection: 'row'},
  eventFirstSubContainer: {flex: 0.9},
  eventSecondSubContainer: {
    flex: 0.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  eventImageStyle: {width: '100%', height: 150},
  lableNameStyle: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    marginTop: 8,
  },
  labelDateStyle: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.poloblue,
    marginTop: 8,
  },
  lableDescStyle: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    color: COLORS.lightgrey,
    marginTop: 8,
  },
  textStyle:{
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    marginBottom: 16,
    textAlign:'justify'
  },
  aboutTextStyle:{
    fontSize: 14,
    lineHeight: 19,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.lightgrey,
    marginVertical: 8,
  },
  summuryTextStyle:{
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    color: COLORS.base,
    marginTop: 8,
    textAlign:'justify',
    opacity:0.8
  },
  registerBtnStyle:{
    marginTop:16
  },
});

export default styles;
