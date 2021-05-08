import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {flexDirection: 'row', alignItems: 'center',flex:0},
  backIconStyle:{flex:0.15},
  subContainer: {
    flex:1,
    borderBottomColor: COLORS.lightgrey,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTextStyle: {
    color: COLORS.base,
    fontFamily: FONTS.galanoGrotesqueSemiBold,
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'none',
    flexGrow:1
  },
});

export default styles;
