import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
const USUARIO = 'USUARIO'

export async function setUsuarioLocal(value) {
    try {
        await AsyncStorage.setItem(USUARIO, value)
    } catch (err) {
        Alert.alert('Movies', JSON.stringify(err))
    }
}

export async function getUsuarioLocal() {
    try {
        const value = await AsyncStorage.getItem(USUARIO)
        if (value === null) {
            return null
        }

        return value
    } catch (err) {
        Alert.alert('Movies', JSON.stringify(err))
    }
}
