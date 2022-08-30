import React from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default Home;
