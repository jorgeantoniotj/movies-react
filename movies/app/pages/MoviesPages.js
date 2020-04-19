import React, {Component} from 'react';
import {Text, Button, Alert} from 'react-native';
import MoviesService from '../net/MoviesService';

class MoviesPage extends Component {
  service = new MoviesService();

  componentDidMount() {}

  getMovies = async () => {
    try {
      let result = await this.service.getMovies();
      Alert.alert('Peliculas', JSON.stringify(result));
    } catch (err) {
      Alert.alert('Peliculas', JSON.stringify(err));
    }
    //alert('getMovies');
  };

  render() {
    return <Button title="OBTENER PELICULAS" onPress={this.getMovies} />;
  }
}

export default MoviesPage;
