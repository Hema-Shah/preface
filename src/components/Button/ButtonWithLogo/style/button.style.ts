import {StyleSheet} from 'react-native';
import { COLORS, FONTS } from 'theme';

const styles = StyleSheet.create({
    buttonViewStyle:{
        paddingVertical:13,
        borderColor:COLORS.base,
        borderWidth:1,
        borderRadius:5,
        alignItems:'center'
    },
    buttonTextStyle:{
        fontFamily: FONTS.galanoGrotesqueMedium,
        lineHeight:15,
        color:COLORS.base,
        fontSize:13,
        textAlign:'center'
    },
    logoView:{
        position: 'absolute',
        left: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
      }
});


export default styles;