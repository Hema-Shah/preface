import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLORS, FONTS} from 'theme';
// import {Item, Input, Label, Icon} from 'native-base';
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

export const Input = ({
  placeholder,
  onChangeText,
  value,
  name,
  secure = false,
  message,
  text,
  placeholderStyle,
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
        theme={{
          colors: {
            primary: COLORS.base,
            background: COLORS.transparent,
            placeholder: COLORS.lightgrey,
          },
          fonts: {
            regular: {
              // fontWeight:'bold',
              fontFamily: FONTS.galanoGrotesqueSemiBold,
            },
          },
        }}
      />
      {/* <Item floatingLabel style={styles.mainContainer}>
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
      </Item> */}
      {(typeof message == 'object' && _renderMessage(message[name])) ||
        (typeof text == 'string' &&
          !valid &&
          value != '' &&
          _renderStringMessage(text))}
    </>
  );
};
