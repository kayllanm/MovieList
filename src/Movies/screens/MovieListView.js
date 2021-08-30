import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as moviesActions from '../state/MoviesActions';
import {
  SimpleGrid,
  Box,
  Image,
  ScrollView,
  View,
  Center,
  Text,
} from 'native-base';

type Props = {
  fetchMovies: Function,
  movies: Array<{}>,
  navigation: any,
};

const MovieListView = ({fetchMovies, movies, navigation}: Props) => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const goToDetails = movie => {
    navigation.navigate('Details', {selectedMovie: movie});
  };

  return (
    <Center>
      <ScrollView>
        <View>
          <SimpleGrid columns={2} spacing={2}>
            {movies.movies?.results?.map((movie, index) => {
              return (
                <TouchableOpacity onPress={() => goToDetails(movie)}>
                  <Box
                    bg="black"
                    size={48}
                    rounded="sm"
                    _text={{
                      fontSize: 'sm',
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems:'center',
                        width: '100%',
                        height: '100%',
                      }}>
                      <Image
                        size={'lg'}
                        resizeMode="cover"
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                        }}
                      />
                      <Text fontSize="md" style={{color: '#fff'}}>
                        {movie.title}
                      </Text>
                    </View>
                  </Box>
                </TouchableOpacity>
              );
            })}
          </SimpleGrid>
        </View>
      </ScrollView>
    </Center>
  );
};
const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {
  fetchMovies: moviesActions.fetchMovies,
})(MovieListView);
