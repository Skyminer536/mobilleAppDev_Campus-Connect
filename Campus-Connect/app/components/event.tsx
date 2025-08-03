import React from 'react';
import { Text, View, Image } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from "expo-router";


const EventCard = () => {
    return (
    <View>
        <View style={{
            width: 250,
            margin: 'auto',
            backgroundColor: '#FFFFFF',
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: 30,
                borderStyle: 'solid',
                borderColor: '#000000',
                borderWidth: 5,
            }}>
                <Text>17/21</Text>
                <FontAwesome6 name='user-large' color={"#000000"} size={10}/>
                {/* <Image style={{
                    width: 10,
                    height: 10,

                }}/> */}
            </View>
            <Image style={{
                width: "100%",
                height: 300,
                backgroundColor: '#762534',
            }}></Image>
            <View>
                <Text>
                    Event Name
                </Text>

                <Text>Tags: #Sports #VolleyBall</Text>
            </View>


        </View>

    </View>
    )

}

export default EventCard;