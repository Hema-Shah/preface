import { heightPercentageToDP } from 'helpers';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
  buttonViewStyle: {
    paddingVertical: heightPercentageToDP(2),
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: COLORS.poloblue,
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
    fontFamily: FONTS.galanoGrotesqueMedium,
    fontSize: 10,
    lineHeight: 12,
    marginBottom: 4,
  },
});

export default styles;
