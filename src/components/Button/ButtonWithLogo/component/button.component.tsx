import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../style/button.style';
import GoogleLogo from '../../../../assets/svgs/google.svg';
import FacebookLogo from '../../../../assets/svgs/facebook.svg';
import AppleLogo from '../../../../assets/svgs/apple.svg';

type ButtonProps = {
  onButtonPress: () => any;
  buttonTitle: string;
  containerStyle: object;
  logo: string;
};

export const ButtonWithLogo = ({
  onButtonPress,
  buttonTitle,
  containerStyle,
  logo,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonViewStyle, containerStyle]}
      onPress={onButtonPress}
      activeOpacity={0.8}>
      <View
        style={styles.logoView}>
        {logo == 'Google' && <GoogleLogo />}
        {logo == 'Facebook' && <FacebookLogo />}
        {logo == 'Apple' && <AppleLogo />}
      </View>
      <Text style={styles.buttonTextStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
