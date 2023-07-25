import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigation } from './src/navigation/StackNavigation';
import { AuthProvider } from './src/context/AuthaContext';


const AppState = ({children}: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation/>
      </AppState>
    </NavigationContainer>
  )
}

export default App;