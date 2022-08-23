import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 10,
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    padding: 5,
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
