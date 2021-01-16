import { useState, useEffect } from 'react';

const useFetchVideos = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setVideos(data);
    };
    fetchVideos();
  }, []);
  return videos;
};

export default useFetchVideos;
