import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.lightwhite,
    padding: 40,
  },
  subContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  checkEmail: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    marginTop: 20,
  },
  emailInstruction: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueMedium,
    color: COLORS.base,
    textAlign: 'center',
    marginTop: 8,
  },
  backToSignInBtn: {
    backgroundColor: '#FFFFFF00',
    borderColor: COLORS.base,
    borderWidth: 1,
  },
  backToSignInText: {
    color: COLORS.black,
  },
  notReceiveEmail: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FONTS.galanoGrotesqueBold,
    color: COLORS.base,
    textAlign: 'center',
    marginBottom: 8,
  },
  checkRequest: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FONTS.galanoGrotesqueMedium,
    color: COLORS.base,
    textAlign: 'center',
  },
});

export default styles;
