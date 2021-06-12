import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 32,
  },
  ticketTextStyle: {
    color: COLORS.base,
    fontFamily: FONTS.galanoGrotesqueBold,
    fontSize: 36,
    lineHeight: 42,
  },
  indicatorStyle: { backgroundColor: COLORS.poloblue, height: 4 },
  renderTextStyle: {
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    fontSize: 18,
    lineHeight: 24,
  },
  tabContainerStyle: {
    backgroundColor: COLORS.white,
    elevation: 0,
    shadowOpacity: 0,
    marginHorizontal: 32,
  },
  wrapperContainer: {
    flex: 1,
  },
  upcomingTicketContainet: {
    backgroundColor: COLORS.white,
    height: 150,
    marginVertical: 21,
    elevation: 3,
    shadowOpacity: 0,
    borderRadius: 25,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  upcomingFirstSubContainer: { flex: 0.05, backgroundColor: COLORS.poloblue },
  upcomingSecondSubContainer: {
    flex: 0.60,
    borderRightColor: COLORS.lightwhite,
    borderRightWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 1,
    padding: 10,
    flexDirection: 'row'
  },
  upcomingThirdSubContainer: { flex: 0.35, padding: 10, paddingTop: 24 },
  titleTextStyle: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
  },
  descTextStyle: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: FONTS.galanoGrotesqueMedium,
    color: COLORS.lightgrey,
    marginTop:8
  },
  dateTextStyle: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    color: COLORS.poloblue,
  },
  formattedDateTextStyle: {
    fontSize: 8,
    lineHeight: 11,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
  }
});

export default styles;
