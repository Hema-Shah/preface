import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
    labelStyle: {
        color: COLORS.lightgrey,
        fontFamily: FONTS.galanoGrotesqueSemiBold,
        fontSize: 16,
      },
      searchIconStyle: {
        color: COLORS.lightgrey,
        fontSize: 16,
      },
      backIconStyle:{
          color:COLORS.base,
          fontSize:24,
          marginRight:8
      },
      inputTextStyle:{
        color: COLORS.base,
        fontFamily: FONTS.galanoGrotesqueSemiBold,
        fontSize: 16,
        textDecorationLine:'none'
      }
});


export default styles;