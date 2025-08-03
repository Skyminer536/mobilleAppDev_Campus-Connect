import React from 'react';
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import StoreCard from "../../components/storeItem"

export default function store() {

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 30,
        }}
      >
        <View style={styles.searchBar}>
          <FontAwesome6 name='magnifying-glass' color={"#000000"} size={15}/>
          <Text style={{
            fontSize: 15,
            marginLeft: 5,
          }}>Search</Text>
        </View>

        <View style={{
          width: "90%",
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          flexWrap: "wrap",
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: "auto",
        }}>
          <StoreCard />
          <StoreCard />
          <StoreCard />

        </View>

      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    margin: 'auto',
    padding: 8,
    position: 'sticky',


  },



});