import React from 'react'
import { useContext } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { AuthContext } from '../context/AuthaContext';

export const ProtectedScreen = () => {
      const {user, token, logOut} = useContext(AuthContext)
      console.log(logOut)
  return (
        <View style={styles.container}>
            <Text style={styles.title}>ProtectedScreen</Text>
            
            <Button
                  title='Logout'
                  color='#5856D6'
                  onPress={logOut}
            />

            <Text>
                  {
                        JSON.stringify(user, null, 5)
                  }
            </Text>
            <Text>
                  {
                        token
                  }
            </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:20
    },
    title:{
      fontSize:20,
      marginBottom:20
    }
    
});