import React from 'react';
import styles from '../style/toast.style';
import { Snackbar } from 'react-native-paper';
import { COLORS } from 'theme';

type ToastProps = {
  visible: boolean;
  onDismiss: () => any;
  message: string;
};

export const Toast = ({ visible, onDismiss, message }: ToastProps) => {
  return (
    <>
      <Snackbar visible={visible} onDismiss={onDismiss} style={styles.mainContainer} theme={{ colors: { surface: COLORS.white } }}>
        {message}
      </Snackbar>
    </>
  );
};
