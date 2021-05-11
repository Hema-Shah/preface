import AsyncStorage from '@react-native-community/async-storage';

export const saveKey = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('error: ' + error);
  }
};

export const getKey = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export const resetKey = async (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('error: ' + error);
  }
};

export const clearKey = async () => {
  return await AsyncStorage.clear();
};
