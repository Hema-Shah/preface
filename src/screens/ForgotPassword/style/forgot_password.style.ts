import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.base,
  },
  firstSubContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSubContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  thirdSubContainer: {
    flex: 0.8,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  subScrollView: {flex: 1, padding: 40},
  buttonContainerStyle: {
    marginTop: 8,
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
  forgotView: {
    marginBottom: 32,
  },
  buttonLogoContainer: {
    marginBottom: 24,
  },
});

export default styles;
