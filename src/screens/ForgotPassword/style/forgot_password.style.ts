import { heightPercentageToDP } from 'helpers';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.base,
  },
  firstSubContainer: {
    height: heightPercentageToDP(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSubContainer: {
    height: heightPercentageToDP(8),
    justifyContent: 'center',
  },
  thirdSubContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: heightPercentageToDP(4),
    justifyContent: 'space-around'
  },
  forgotTextStyle: {
    fontSize: 22,
    lineHeight: 26,
    color: COLORS.white,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueMedium,
    textAlign: 'center',
    color: COLORS.base,
  },
});

export default styles;
