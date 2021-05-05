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
  name?: string;
  message?: object;
  disabled?: boolean;
};

export const ButtonWithoutLogo = ({
  onButtonPress,
  buttonTitle,
  containerStyle,
  buttonTextStyle,
  loading = false,
  name,
  message,
  disabled
}: ButtonProps) => {
  const _renderMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message[0]}</Text>;
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.buttonViewStyle, containerStyle,disabled ? {opacity:0.6}:null]}
        onPress={onButtonPress}
        activeOpacity={0.8}
        disabled={disabled}>
        {loading ? (
          <ActivityIndicator color={COLORS.white} size={14}/>
        ) : (
          <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
            {buttonTitle}
          </Text>
        )}
      </TouchableOpacity>
      {typeof message == 'object' && _renderMessage(message[name])}
    </>
  );
};
