import React from 'react';
import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
import style from "./css/style";
import { Image, ImageBackground } from 'expo-image';


export default function login() {

return (
    <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
            {/* NOTE FOR ALL IMAGES: Placing them in the root assets/images folder outside of app allows expo to access those images from anywhere in the project */}
            <Image contentFit='contain' source={require('./assets/images/logo.png')} style={styles.logoImage}/>     
            <Text style={{
              fontSize: 60,
              marginTop: '5%',
            }}>Campus</Text>
        </View>
    
        <View
            style={{
                flex: 1,
                justifyContent: "start",
                alignItems: "center",
            }}
            >
            <Text style={{
              fontSize: 35,

            }}>Connect</Text>
      
            
            <Link href="../mainContent/(tabs)" 
            style={{
              backgroundColor:'#F79E1B',
              width:'100%',
              marginTop: '5%',
              paddingInline: 60,
              paddingTop:'5%',
              paddingBottom:'5%',
              borderColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 12,
              textAlign:'center',
              fontSize:17,


            }}>Login</Link>

            <Link href="../mainContent/(tabs)" 
            style={{
              width:'100%',
              backgroundColor:'#F79E1B',
              marginTop: '5%',
              paddingInline: 50,
              paddingTop:'5%',
              paddingBottom:'5%',
              borderColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 12,
              textAlign:'center',
              fontSize:17,


            }}>Register</Link>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({

  loginContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#2AB4AE",
    justifyContent:'center', 
    alignItems:'center', 
  },

  logoImage: {
    width: '50%',
    height: '50%',
  },
  
  logoContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent:'flex-end', 
    alignItems:'center', 
    marginTop: '15%',
  },
})