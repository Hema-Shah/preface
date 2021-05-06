import React from 'react';
import {Item, Input, Icon} from 'native-base';
import styles from '../style/search-header.style';
import { COLORS } from 'theme';

type SearchHeaderProps = {
  placeholder: string;
  onChangeText: (text: string) => any;
  value: string;
};

export const SearchHeader = ({
  placeholder,
  onChangeText,
  value,
  }:SearchHeaderProps) => {
  return (
      <Item>
        <Icon type="Ionicons" name={'search'} style={styles.searchIconStyle}/>
        <Input
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder.toUpperCase()}
          placeholderTextColor={COLORS.lightgrey}
          style={styles.inputTextStyle}
        />
      </Item>
  );
};
