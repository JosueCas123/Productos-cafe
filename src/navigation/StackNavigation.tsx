import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {

  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle:{
            backgroundColor: 'white'
          }
        }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </Stack.Navigator>
  );
}