import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from "expo-router";


const EventCard = ({eventDate,eventName,tags,numFriends}) => {
    return (

    <View style ={{
            margin: 5,
        }}>
        <TouchableOpacity>
            <View style={{
                width: 300,
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
                    borderWidth: 1,
                }}>
                    <Text style={{
                        margin: 5,
                    }}>{eventDate}</Text>
                    <FontAwesome6 style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                    }} name='user-large' color={"#000000"} size={10}/>
                    {/* <Image style={{
                        width: 10,
                        height: 10,
                    }}/> */}
                </View>
                <View style={{
                     borderStyle: 'solid',
                     borderColor: '#000000',
                     borderWidth: 1,
                }}>
                    <Image style={{
                        width: "100%",
                        height: 200,
                        backgroundColor: '#762534',
                    }}></Image>
                </View>
                <View style={{
                    padding: 5,
                    borderStyle: 'solid',
                    borderColor: '#000000',
                    borderWidth: 1,}}>
                    <Text style={{
                        margin: 5,
                        fontSize: 20,
                        textOverflow: 'wrap',
                    }}>
                        {eventName}
                    </Text>
                    <Text style={{
                        margin: 5,
                    }}>{tags}</Text>
                </View>  
            </View> 
        </TouchableOpacity>       
        <View style={{
            width: 175,
            margin: 'auto',
        }}>
            <Text style={{
                marginTop: 5,
                color: '#ffffff',
            }}>{numFriends}</Text>
        </View>  
    </View>
    )

}

export default EventCard;