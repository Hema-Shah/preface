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
  message?: string;
};

export const ButtonWithoutLogo = ({
  onButtonPress,
  buttonTitle,
  containerStyle,
  buttonTextStyle,
  loading = false,
  name,
  message,
}: ButtonProps) => {
  const _renderMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message[0]}</Text>;
    }
  };

  return (
    <>
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
      {typeof message == 'object' && _renderMessage(message[name])}
    </>
  );
};
