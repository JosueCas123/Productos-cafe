import React,{useContext, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, Text,TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native';
import { Backgroud } from '../components/Backgroud';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyle } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthaContext';

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({navigation}:Props) => {

  const {signIn,errorMessage, removeError} = useContext(AuthContext)

  const {email, password, onChange} = useForm({
    email:'',
    password:'',
  });

  useEffect(() => {
    if(errorMessage.length === 0) return
    Alert.alert(
      'Login incorrecto', 
      errorMessage,
      [
        {
          text:'ok',
          onPress:removeError
        }
      ]
    )
  }, [errorMessage])
  
  const onlogin = () => {
    console.log({email, password});
    //el teclado se quita luego de logear
    Keyboard.dismiss();

    //envias en pbejeto el email el password
    signIn({correo: email, password: password})
  };
  return (
    <>
      {/* Backgroubd */}
      <Backgroud/>
      {/* */}
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={(Platform.OS === 'ios')? 'padding' : 'height'}
      >
        <View style={loginStyle.formContainer}>

            <WhiteLogo/>
            <Text style={loginStyle.title}> Login </Text>
            <Text style={loginStyle.label}>Email: </Text>
            <TextInput
                placeholder='Ingrese su email'
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType="email-address"
                underlineColorAndroid="white"
                style={loginStyle.inputField}
                onChangeText={(value) => onChange(value, 'email')}
                value={email}
                onSubmitEditing={onlogin}
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
                onSubmitEditing={onlogin}
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
                    onPress={onlogin}
                  >
                    <Text style={loginStyle.buttonText}>Login</Text>
                  </TouchableOpacity>
            </View>
            {/* crear una nueva ceunta */}
            <View style={loginStyle.newUserContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  //repleace rempleza la pantalla a diferencia que navigete 
                  onPress={() => navigation.replace('RegisterScreen')}
                >
                  <Text style={loginStyle.buttonText}>Nueva Cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>

    </>
  )
}
