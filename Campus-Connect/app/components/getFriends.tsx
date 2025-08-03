import React from 'react';
import { Text, View} from "react-native";
import { Image, ImageBackground } from 'expo-image';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from "expo-router";


const ListFriends = () => {
    return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                
            }}>
                <View style={{    
                    backgroundColor: "#0056A3",
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    borderColor: '#FFFFFF',
                    borderWidth: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                  <Image source={require('../assets/images/dashboard_icon.svg')} style={{
                    width: 10,
                    height: 10,
                  }}/>
                </View>
                <Text style={{
                    padding: 10,
                    color: '#FFFFFF',
                }}>Insert Friend Activity</Text>
            </View>

    );

}

export default ListFriends;