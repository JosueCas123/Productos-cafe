import {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { ProtectedScreen } from '../screen/ProtectedScreen';
import { AuthContext } from '../context/AuthaContext';
import { LoadingScreen } from '../screen/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {

  const { status } = useContext(AuthContext)
  if (status === 'checkin') return <LoadingScreen/>

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle:{
            backgroundColor: 'white'
          }
        }}
    >
      {
        (status !== 'authenticated')
          ?(
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen}/>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            </>
          )
          :(
            <Stack.Screen name="ProtectedScreen" component={ProtectedScreen}/>
          )
      }
    </Stack.Navigator>
  );
}