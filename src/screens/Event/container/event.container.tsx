import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { COLORS } from 'theme'
import styles from '../style/event.style'

export function EventScreen() {
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <Text>EventScreen</Text>
        </View>
    )
}

