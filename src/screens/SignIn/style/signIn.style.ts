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
  welcomeTextStyle: {
    fontSize: 22,
    lineHeight: 26,
    color: COLORS.white,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    textAlign: 'center',
  },
  forgotTextStyle: {
    fontSize: 12,
    lineHeight: 14,
    textDecorationLine: 'underline',
    fontFamily: FONTS.galanoGrotesqueMedium,
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    textAlign: 'center',
    color: COLORS.base,
  },
  buttonLogoContainer: {
    marginVertical: 24,
  },
});

export default styles;
