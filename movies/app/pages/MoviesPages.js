import React, { Component } from 'react'
import { Button, Alert, FlatList, View, RefreshControl } from 'react-native'
import MoviesService from '../net/MoviesService'
import ItemMovie from '../components/ItemMovie'

class MoviesPage extends Component {
    service = new MoviesService()

    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        try {
            this.setState({ isLoading: true })
            let result = await this.service.getMovies()

            this.setState({ peliculas: result })
            this.setState({ isLoading: false })
        } catch (err) {
            Alert.alert('Peliculas', JSON.stringify(err))
            this.setState({ isLoading: false })
        }
    }

    onRefresh = () => {
        this.getMovies()
    }

    onPressItem = (item) => {
        const { navigation } = this.props
        navigation.navigate('Detail', {
            movie: item,
        })
    }

    render() {
        const { peliculas, isLoading } = this.state
        return (
            <View>
                <FlatList
                    data={peliculas}
                    renderItem={({ item }) => (
                        <ItemMovie
                            item={item}
                            onPressItem={() => {
                                this.onPressItem(item)
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.Title}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={this.onRefresh}
                        />
                    }
                />
            </View>
        )
    }
}

export default MoviesPage
