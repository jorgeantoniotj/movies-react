import React from 'react'
import { StyleSheet, TouchableHighlight, Text } from 'react-native'
import Theme from './Theme'

const Button = (props) => {
    return (
        <TouchableHighlight
            underlayColor={props.isPrimary ? Theme.secondaryColor : Theme.primaryColor}
            onPress={props.onPress}
            style={[
                props.isPrimary ? styles.button : styles.secondary,
                props.containerStyle,
            ]}>
            <Text>{props.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 48,
        backgroundColor: Theme.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    secondary: {
        height: 48,
        backgroundColor: Theme.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
})

export default Button
