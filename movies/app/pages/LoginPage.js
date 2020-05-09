import React, { Component, useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import Button from '../components/Button'
import styles from './LoginPageStyle'
import { setUsuarioLocal, getUsuarioLocal } from '../data/PreferenceHelper'

const LoginPage = ({ navigation: { navigate } }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const comprobarUsuario = async () => {
        const usuario = await getUsuarioLocal()
        if (usuario !== null) {
            navigate('Main')
        }
    }

    const onChangePassword = (value) => {
        setPassword(value)
    }

    const onChangeUsuario = (value) => {
        setUsuario(value)
    }

    const onPressLogin = async () => {
        await setUsuarioLocal(usuario)
        navigate('Main')
    }

    useEffect(() => {
        comprobarUsuario()
    })

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                maxLength={10}
                placeholder="Usuario"
                value={usuario}
                onChangeText={onChangeUsuario}
            />
            <TextInput
                style={styles.input}
                maxLength={10}
                placeholder="Contraseña"
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry={true}
            />
            <Button text="INGRESAR" onPress={onPressLogin} />
        </View>
    )
}

export default LoginPage
