import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.base,
  },
  firstSubContainer: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSubContainer: {
    height: '20%',
    justifyContent: 'center',
  },
  thirdSubContainer: {
    height: '80%',
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
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    marginBottom: 8,
  },
});

export default styles;
