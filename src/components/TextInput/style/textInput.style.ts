import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 4,
  },
  labelStyle: {
    color: COLORS.lightgrey,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    marginBottom: 8,
  },
});

export default styles;
