import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLORS, FONTS} from 'theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../style/input.style';

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => any;
  value: string;
  secure?: boolean;
  name: string;
  message?: any;
  text?: string;
  placeholderStyle?: object;
  valid?: boolean;
};

const InputTheme = {
  colors: {
    primary: COLORS.black,
    background: COLORS.transparent,
    placeholder: COLORS.lightgrey,
    text: COLORS.base,
  },
  fonts: {
    regular: {
      fontFamily: FONTS.galanoGrotesqueSemiBold,
    },
  },
};

export const Input = ({
  placeholder,
  onChangeText,
  value,
  name,
  secure = false,
  message,
  text,
  valid,
}: InputProps) => {
  const [isShow, setisShow] = useState(secure);

  const _renderMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message[0]}</Text>;
    }
  };

  const _renderStringMessage = (message: any) => {
    if (message != undefined) {
      return <Text style={styles.errorMessage}>{message}</Text>;
    }
  };

  return (
    <>
      <TextInput
        label={placeholder.toUpperCase()}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isShow}
        autoCapitalize={'none'}
        style={styles.textInputStyle}
        underlineColorAndroid='transparent'
        right={
          secure && (
            <TextInput.Icon
              name={() => (
                <Icon
                  name={isShow ? 'eye-slash' : 'eye'}
                  size={20}
                  color={COLORS.lightgrey}
                />
              )}
              onPress={() => {
                setisShow(!isShow);
              }}
            />
          )
        }
        theme={InputTheme}
      />
      {(typeof message == 'object' && _renderMessage(message[name])) ||
        (typeof text == 'string' &&
          !valid &&
          value != '' &&
          _renderStringMessage(text))}
    </>
  );
};
