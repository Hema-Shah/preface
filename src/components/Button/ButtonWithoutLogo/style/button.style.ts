import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  buttonViewStyle: {
    paddingVertical: 13,
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: COLORS.lightblue,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontFamily: FONTS.galanoGrotesqueBold,
    lineHeight: 16,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 14,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    marginBottom: 8,
  },
});

export default styles;
