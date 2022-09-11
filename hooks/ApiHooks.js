import {useEffect, useState} from 'react';
import {doFetch} from '../utils/Http';
import {apiUrl} from '../utils/Variables';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const json = await doFetch(apiUrl + 'media?limit=5');
      console.log(json);

      const allMediaData = json.map(async (mediaItem) => {
        return await doFetch(apiUrl + 'media/' + mediaItem.file_id);
      });

      setMediaArray(await Promise.all(allMediaData));
    } catch (error) {
      console.log('media fetch failed', error);
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);
  return {mediaArray};
};

const useLogin = () => {
  const postLogin = async (userCredentials) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    };
    try {
      return await doFetch(apiUrl + 'login', options);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    try {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      const userData = await doFetch(apiUrl + 'users/user', options);

      return userData;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const postUser = async (data) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      return await doFetch(apiUrl + 'users', options);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {getUserByToken, postUser};
};

const useTag = () => {
  const getFilesByTag = async (tag) => {
    return await doFetch(apiUrl + 'tags/' + tag);
  };

  return {getFilesByTag};
};

export {useLogin, useMedia, useUser, useTag};
