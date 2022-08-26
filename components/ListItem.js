import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <View style={styles.parentView}>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={{uri: props.singleMedia.thumbnails.w160}}
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.title}>{props.singleMedia.title}</Text>
          <Text style={styles.desc}> {props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 10,
  },
  view: {
    flex: 1,
    backgroundColor: '#14A76C',
    padding: 5,
    height: 180,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    color: 'white',
    fontSize: 12,
  },
  parentView: {
    backgroundColor: '#14A76C',
    flexDirection: 'row',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
