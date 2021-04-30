import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightwhite,
    padding: 40,
  },
  firstSubContainer: {
    alignItems: 'center',
    flex: 0.3,
  },
  secondSubContainer: {
    flex: 0.7,
  },
  resetPasswordText: {
    marginTop: 8,
    fontSize: 22,
    lineHeight: 26,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
  },
  resetBtnStyle: {
    marginTop: 60,
  },
});

export default styles;
