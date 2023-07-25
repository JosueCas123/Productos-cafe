import React from 'react';
import { View, StatusBar } from 'react-native';

export const Backgroud = () => {
    const colorLogin = '#5856d6';
  return (
    <>
        <View
            style={{
                position: 'absolute',
                backgroundColor:colorLogin,
                top:-300,
                width: 1000,
                height: 1200,
                transform:[
                    {rotate:'-70deg'}
                ],
            }}

        />
        <StatusBar backgroundColor={colorLogin}/>
    </>
       
  )
}
