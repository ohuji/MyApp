import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const Single = ({route}) => {
  const {singleMedia, mediaUrl} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{singleMedia.title}</Text>
      <Image
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        style={{width: 200, height: 200}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
