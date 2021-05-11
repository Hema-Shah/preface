import React from 'react';
import styles from '../style/search-header.style';
import {COLORS} from 'theme';
import ArrowLeft from '../../../assets/svgs/arrow_left.svg';
import Search from '../../../assets/svgs/search.svg';
import {View, TextInput, TouchableOpacity} from 'react-native';

type SearchHeaderProps = {
  placeholder: string;
  showHeaderBack?: boolean;
  onChangeText: (text: string) => any;
  onBackPress?: () => any;
  value: string;
};

export const SearchHeader = ({
  placeholder,
  showHeaderBack,
  onChangeText,
  onBackPress,
  value,
}: SearchHeaderProps) => {
  return (
    <View style={styles.mainContainer}>
      {showHeaderBack && (
        <TouchableOpacity style={styles.backIconStyle} onPress={onBackPress}>
          <ArrowLeft />
        </TouchableOpacity>
      )}
      <View style={styles.subContainer}>
        <Search />
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder.toUpperCase()}
          placeholderTextColor={COLORS.lightgrey}
          style={styles.inputTextStyle}
          autoCapitalize={'none'}
          returnKeyType="done"
        />
      </View>
    </View>
  );
};
