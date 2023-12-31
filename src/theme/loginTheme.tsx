import {StyleSheet} from 'react-native'

export const loginStyle = StyleSheet.create({
    formContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:"center",
        height:600,
        marginBottom:50
    },
    title:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        marginTop: 25
    }, 
    label:{
        marginTop:15,
        color:'white',
        fontWeight:'bold',
    },
    inputField:{
        color:'white',
        fontSize:20,

    },
    buttonContainer:{
        alignItems:'center',
        marginTop:50,

    },
    button:{
        borderWidth:2,
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },
    buttonText:{
        fontSize:18,
        color:"white",
    },
    newUserContainer:{
        alignItems:"flex-end",
        marginTop:10,
    },
    buttonReturn:{
        position:'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor:'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100,
    },
});