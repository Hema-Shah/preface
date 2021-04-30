import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Item, Input, Label} from 'native-base';
import styles from '../style/textInput.style';

type TextInputProps = {
  placeholder: string;
  onChangeText: (text: string) => any;
  value: string;
  secure?: boolean;
  name: string;
  message?: any;
};

export const TextInput = ({
  placeholder,
  onChangeText,
  value,
  name,
  secure = false,
  message,
}: TextInputProps) => {
  const _renderMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message[0]}</Text>;
    }
  };

  return (
    <>
      <Item floatingLabel style={styles.mainContainer}>
        <Label style={styles.labelStyle}>{placeholder.toUpperCase()}</Label>
        <Input
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secure}
        />
      </Item>
      {typeof message == 'object' && _renderMessage(message[name])}
    </>
  );
};
