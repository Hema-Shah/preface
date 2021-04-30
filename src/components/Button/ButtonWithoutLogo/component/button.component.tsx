import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {COLORS} from 'theme';
import styles from '../style/button.style';

type ButtonProps = {
  onButtonPress: () => any;
  buttonTitle: string;
  containerStyle?: object;
  buttonTextStyle?: object;
  loading?: boolean;
};

export const ButtonWithoutLogo = ({
  onButtonPress,
  buttonTitle,
  containerStyle,
  buttonTextStyle,
  loading = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonViewStyle, containerStyle]}
      onPress={onButtonPress}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
          {buttonTitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};
