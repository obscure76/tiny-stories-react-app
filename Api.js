import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://example.com/api',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <Text>{JSON.stringify(data)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Api;
