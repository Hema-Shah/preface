import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { COLORS } from 'theme'
import styles from '../style/notification.style'

export function NotificationScreen() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <Text>NotificationScreen</Text>
        </View>
    )
}

