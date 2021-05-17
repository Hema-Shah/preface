import {StyleSheet,Dimensions} from 'react-native';
import {COLORS, FONTS} from 'theme';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: COLORS.base,
  },
  firstSubContainer: {
    height: height / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSubContainer: {
    height: height / 10,
    justifyContent: 'center',
  },
  thirdSubContainer: {
    flex:1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 32,
    paddingHorizontal:38
  },
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
