// custom hook yra funkcija kuri gali naudoti hooks

import axios from 'axios';
import { useEffect, useState } from 'react';

// butinai turi prasideti zodeliu 'use'
function useGetData(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    // const url = `http://localhost:5000/posts/${postId}`;
    axios
      .get(url)
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.warn('err ===', err);
      });
  }, []);

  return { data, setData };
}

export default useGetData;
