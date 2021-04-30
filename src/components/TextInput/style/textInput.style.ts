import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 8,
  },
  labelStyle: {
    color: COLORS.base,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    fontSize: 16,
    lineHeight: 19,
    opacity: 0.5,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    marginBottom: 8,
  },
  iconStyle: {
    color: COLORS.base,
    opacity: 0.5,
  },
});

export default styles;
