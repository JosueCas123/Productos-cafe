import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, StatusBar } from 'react-native';
import { loginStyle } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthaContext';

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ({navigation}:Props) => {

  const {singUp} = useContext(AuthContext)

  const {email, password, nombre, onChange} = useForm({
    nombre:'',
    email:'',
    password:''
  })

  const onRegister = () => {
    console.log({email, password, nombre});
    Keyboard.dismiss();
    singUp({correo:email, password:password, nombre:nombre})
  }
  const colerRegiste ='#5856d6'
  return (
    <>
     
      <KeyboardAvoidingView
        style={{flex:1, backgroundColor:colerRegiste}}
        behavior={(Platform.OS === 'ios')? 'padding' : 'height'}
      >
        <StatusBar backgroundColor={colerRegiste}/>
        <View style={loginStyle.formContainer}>

            <WhiteLogo/>
            
            <Text style={loginStyle.title}> Register </Text>
            <Text style={loginStyle.label}>Nombre: </Text>
            <TextInput
                placeholder='Ingrese su Nombre'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style={loginStyle.inputField}
                onChangeText={(value) => onChange(value, 'nombre')}
                value={nombre}
                onSubmitEditing={onRegister}
                selectionColor="white"
                autoCapitalize="words"
                autoCorrect={false}
            />
            <Text style={loginStyle.label}>Email: </Text>
            <TextInput
                placeholder='Ingrese su email'
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType="email-address"
                underlineColorAndroid="white"
                style={loginStyle.inputField}
                onChangeText={(value) => onChange(value, 'email')}
                value={email}
                onSubmitEditing={onRegister}
                selectionColor="white"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Text style={loginStyle.label}>Contraseña: </Text>

            <TextInput
                
                placeholder='*********'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                secureTextEntry
                style={loginStyle.inputField}
                onChangeText={(value) => onChange(value, 'password')}
                value={password}
                onSubmitEditing={onRegister}
                selectionColor="white"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View
              style={loginStyle.buttonContainer} 
            > 
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyle.button}
                    onPress={onRegister}
                  >
                    <Text style={loginStyle.buttonText}>Crear Cuenta</Text>
                  </TouchableOpacity>
            </View>
            {/* crear una nueva ceunta */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.replace('LoginScreen')}
                  style={loginStyle.buttonReturn}
                >
                  <Text style={loginStyle.buttonText}>Login</Text>
                </TouchableOpacity>
            
        </View>
      </KeyboardAvoidingView>

    </>
  )
}