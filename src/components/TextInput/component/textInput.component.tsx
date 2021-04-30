import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Item, Input, Label, Icon} from 'native-base';
import styles from '../style/textInput.style';

type TextInputProps = {
  placeholder: string;
  onChangeText: (text: string) => any;
  value: string;
  secure?: boolean;
  name: string;
  message?: any;
  placeholderStyle?: object;
};

export const TextInput = ({
  placeholder,
  onChangeText,
  value,
  name,
  secure = false,
  message,
  placeholderStyle,
}: TextInputProps) => {
  const [isShow, setisShow] = useState(secure);

  const _renderMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message[0]}</Text>;
    }
  };

  return (
    <>
      <Item floatingLabel style={styles.mainContainer}>
        <Label style={[styles.labelStyle, placeholderStyle]}>
          {placeholder.toUpperCase()}
        </Label>
        <Input
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isShow}
        />
        {secure && (
          <Icon
            type="FontAwesome5"
            name={isShow ? 'eye-slash' : 'eye'}
            style={styles.iconStyle}
            onPress={() => {
              setisShow(!isShow);
            }}
          />
        )}
      </Item>
      {typeof message == 'object' && _renderMessage(message[name])}
    </>
  );
};
