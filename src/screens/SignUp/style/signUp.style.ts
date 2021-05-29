import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';
import { heightPercentageToDP } from 'helpers';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.base,
  },
  firstSubContainer: {
    height: heightPercentageToDP(15),
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
    paddingVertical: heightPercentageToDP(3)
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
  signInView: { alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.poloblue },
  signInText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    textAlign: 'center',
    color: COLORS.base,
  },
  buttonLogoContainer: {
    marginBottom: heightPercentageToDP(3),
  },
});

export default styles;
