import {useEffect, useState} from 'react';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (item) => {
        const res = await fetch(apiUrl + 'media/' + item.file_id);
        return await res.json();
      });
      setMediaArray(await Promise.all(allMediaData));
    } catch (error) {
      console.log('fetch failer', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
