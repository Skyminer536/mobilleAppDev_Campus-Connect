import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";



const StoreCard = () => {

    const [showItem, switchToItem] = useState("piss");


    return (
        <View style={styles.storeItem}>
            <View style={{
                padding: 10,
            }}>
                <View style={{
                    width: '100%',
                }}>
                    <Image source={require('../../assets/images/cool_hat.jpg')} style={{
                        width: '100%',
                        height: 100,
                    }}/>
                </View>
                <Text>#hat</Text>
            </View>
            <View style={{
                flex: 1,
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: 100,
                borderStyle: 'solid',
                borderTopWidth: 2,
                
            
            }}>
                <Text>Cool Hat</Text>
                <Text style={{fontWeight: 'bold',}}>100 PTS</Text>
                <Link style={styles.pageButton} href="./productViewer">View Item</Link>
            </View>
        </View>


    );

}

export default StoreCard;


const styles = StyleSheet.create({

    pageButton: {
        backgroundColor: '#F79E1B',
        color: '#FFFFFF',
    
    
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
      },

    storeItem: {
        width: '48%',
        height: 250,
        borderStyle: "solid",
        borderWidth: 2,
        borderBlockColor: '#000000',
        marginBottom: 10,



    },

});