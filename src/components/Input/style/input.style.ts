import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  textInputStyle: {paddingHorizontal: 0},
  errorMessage: {
    color: COLORS.red,
    fontFamily: FONTS.galanoGrotesqueMedium,
    fontSize: 10,
    lineHeight: 12,
  },
});

export default styles;
