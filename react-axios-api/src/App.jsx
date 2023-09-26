import React, { useState, useEffect } from 'react';
import axios from "axios";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setData(response.data);
    }

    fetchApi();
  }, []);

  return (
    <div>
      {data.map((repo, index) => (
        <div key={index}>
          <p>Title: {repo.title}</p>
          <p>Url: {repo.url}</p>
          <p>Thumbnail Url: {repo.thumbnailUrl}</p>
        </div>
      ))}
    </div>
  );
}
