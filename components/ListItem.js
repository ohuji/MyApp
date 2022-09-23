import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {mediaUrl} from '../utils/Variables';
import {ListItem as RNEListItem, Avatar, ButtonGroup} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';
import {useMedia} from '../hooks/ApiHooks';
import {Alert} from 'react-native';

const ListItem = ({singleMedia, navigation, myFilesOnly}) => {
  const {user, update, setUpdate} = useContext(MainContext);
  const {deleteMedia} = useMedia();

  const doDelete = () => {
    Alert.alert('Deleting a file..', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          const token = await AsyncStorage.getItem('userToken');
          await deleteMedia(token, singleMedia.file_id);
          setUpdate(!update);
        },
      },
    ]);
  };

  return (
    <RNEListItem
      bottomDivider
      onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}
    >
      <Avatar
        size="large"
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
      />
      <RNEListItem.Content>
        <RNEListItem.Title numberOfLines={1} h4>
          {singleMedia.title}
        </RNEListItem.Title>
        <RNEListItem.Subtitle numberOfLines={1}>
          {singleMedia.description}
        </RNEListItem.Subtitle>
        {singleMedia.user_id === user.user_id && (
          <ButtonGroup
            buttons={['Modify', 'Delete']}
            onPress={async (index) => {
              if (index === 0) {
                navigation.navigate('ModifyFile', singleMedia);
              } else {
                doDelete();
              }
            }}
          />
        )}
      </RNEListItem.Content>
      <RNEListItem.Chevron />
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
