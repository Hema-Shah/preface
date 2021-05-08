import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 8,
  },
  labelStyle: {
    fontSize: 16,
    lineHeight: 19,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    marginBottom: 8,
  },
  iconStyle: {
    color: COLORS.base,
    opacity: 0.5,
    fontSize: 20
  },
});

export default styles;
