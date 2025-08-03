import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

function ProductViewer() {

    
    return(
        <View style={{
            backgroundColor: "#0056A3",
            height: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                width: '80%',
                margin: 'auto',
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                }}>
                    <Text style={{color: '#FFFFFF'}}>Preview Purchase</Text>
                    <Text style={{color: '#FFFFFF'}}>X</Text>
                </View>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../../assets/images/cool_hat.jpg')} style={{
                                            width: '70%',
                                            height: 100,
                                        }}/>
                    <Text>fuck</Text>
                    <Text style={styles.pointCost}>100 pts</Text>
                    <Text style={styles.pageButton}>BUY</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductViewer;


const styles = StyleSheet.create({

    pageButton: {
        backgroundColor: '#F79E1B',
        color: '#FFFFFF',
    
    
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
      },

    pointCost: {
        fontWeight: 'bold',
        color: '#FFFFFF',

    }

    });