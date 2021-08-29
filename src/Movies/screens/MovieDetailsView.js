import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Container,
  Heading,
  Center,
  ScrollView,
  Spinner,
} from 'native-base';
import {connect} from 'react-redux';
import * as moviesActions from '../state/MoviesActions';

type Props = {
  route: any,
  getMovieDetails: Function,
  movieDetails: Object,
  loading: Boolean,
};

const MovieDetailsView = ({
  route,
  getMovieDetails,
  movieDetails,
  loading,
}: Props) => {
  const {selectedMovie} = route.params;

  useEffect(() => {
    getMovieDetails(selectedMovie.id);
  }, []);

  useEffect(() => {
    console.log(movieDetails);
  }, [movieDetails]);

  return (
    <ScrollView>
      {!loading && (
        <Center>
          <Container>
            <Heading mt={3}>{movieDetails?.title}</Heading>
            <Image
              size={'2xl'}
              resizeMode="cover"
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
              }}
            />
            <View>
              <Text>
                <Text bold>Title:</Text> {movieDetails.original_title}
              </Text>
              <Text>
                <Text bold>Release date:</Text> {movieDetails.release_date}
              </Text>
              <Text>
                <Text bold>Overview:</Text> {movieDetails.overview}
              </Text>
              <Text>
                <Text bold>Language:</Text> {movieDetails.original_language}
              </Text>
              <Text>
                <Text bold>Genre:</Text>{' '}
                {movieDetails.genres?.map(genre => `${genre.name} `)}
              </Text>
              <Text>
                <Text bold>Production Co:</Text>{' '}
                {movieDetails.production_companies?.map(
                  company => `${company.name} `,
                )}
              </Text>
            </View>
          </Container>
        </Center>
      )}
      {loading && <Spinner accessibilityLabel="Loading..." />}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  movieDetails: state.movies.movieDetails,
  loading: state.movies.loadingMovieDetails,
});

export default connect(mapStateToProps, {
  getMovieDetails: moviesActions.getMovieDetails,
})(MovieDetailsView);
