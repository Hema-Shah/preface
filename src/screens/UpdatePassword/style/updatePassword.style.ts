import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.lightwhite,
    padding: 40,
  },
  firstSubContainer: {
    flex: 0.4,
    justifyContent: 'space-evenly',
  },
  secondSubContainer: {
    flex: 0.6,
  },
  updateLogoContainer: {alignItems: 'center'},
  updatePasswordText: {
    marginTop: 8,
    fontSize: 22,
    lineHeight: 26,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
  },
  updatePasswordInfoText: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.galanoGrotesqueMedium,
    color: COLORS.base,
    textAlign: 'center',
    marginTop: 24,
  },
});

export default styles;
