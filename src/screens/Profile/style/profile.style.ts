import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 40,
  },
  buttonContainerStyle: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
});

export default styles;
