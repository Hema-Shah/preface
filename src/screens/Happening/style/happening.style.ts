import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 32,
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    color: COLORS.poloblue,
    marginTop: 4,
    marginBottom: 8,
    textAlign: 'center',
  },
  lableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  lableSubContainer: { alignItems: 'center' },
  trendingTextStyle: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    marginBottom: 8,
  },
  eventSeparator: {
    height: 16,
  },
  eventSubContainer: { flexDirection: 'row' },
  eventFirstSubContainer: { flex: 0.9 },
  eventSecondSubContainer: {
    flex: 0.1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  eventImageStyle: { width: '100%', height: 150 },
  iconStyle: {
    fontSize: 16,
  },
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
  noEvent: { alignItems: 'center' },
  noEventTextStyle: {
    fontFamily: FONTS.galanoGrotesqueMedium,
    color: COLORS.base,
  },
  lableDescStyle: {
    fontSize: 12,
    lineHeight: 17,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    color: COLORS.lightgrey,
    marginTop: 8,
  },
});

export default styles;
