import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
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
  lableSubContainer: {alignItems: 'center'},
  trendingTextStyle: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    marginBottom: 8,
  },
});

export default styles;
