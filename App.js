import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const API_URL = 'https://4s2cj3p44k.execute-api.us-east-1.amazonaws.com/beta'


// export default function App() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         fetchData();
//     }, []);
//
//     const fetchData = async () => {
//         try {
//             const response = await fetch(API_URL);
//             const json = await response.json();
//             setData(json);
//         } catch (error) {
//             setError(error);
//         }
//     };
//
//     return (
//         <View>
//             {data ? (
//                 <View>
//                     <Text>ID: {data.prompt}</Text>
//                     <Text>Title: {data.generated_text}</Text>
//                 </View>
//             ) : (
//                 <Text>Loading...</Text>
//             )}
//             {error && <Text>Error: {error.message}</Text>}
//         </View>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
import axios from 'axios';

const Api = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post('https://4s2cj3p44k.execute-api.us-east-1.amazonaws.com/beta', {}, {
                timeout: 30000,
                headers: {
                    'x-api-key': ''
                }
            });
            setData(result.data.body);
        };
        fetchData();
    }, []);

    return (
        <View>
            {data ? (
                <Text>{data}</Text>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default Api;









