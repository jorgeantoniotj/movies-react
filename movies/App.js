import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MoviesPage from './app/pages/MoviesPages'
import DetailMoviePage from './app/pages/DetailMoviePage'
import LoginPage from './app/pages/LoginPage'

const StackNavigator = createStackNavigator({
    Movies: {
        screen: MoviesPage,
        navigationOptions: {
            title: 'Peliculas',
        },
    },
    Detail: {
        screen: DetailMoviePage,
        navigationOptions: {
            title: 'Detalle',
        },
    },
})

const SwichNavigator = createSwitchNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: {
                title: 'Login',
            },
        },
        Main: StackNavigator,
    },
    {
        initialRouteName: 'Login',
    }
)

const AppContainer = createAppContainer(SwichNavigator)

class App extends Component {
    render() {
        return <AppContainer />
    }
}
export default App
