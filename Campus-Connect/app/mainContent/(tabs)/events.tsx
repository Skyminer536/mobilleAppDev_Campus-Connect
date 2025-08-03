import React from 'react';
import { Text, Button, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Image, ImageBackground } from 'expo-image';
import EventCard from '../../components/eventWithArgs';
import SearchBar from '../../components/searchbar';
import style from "../../css/style";

export default function events() {
  const eventArray = [
    <EventCard key="1" eventDate={"11/27"} eventName={"Volley Ball Game"} tags={'#Sports #Volleyball'} numFriends={"+ " + 2 + " friends are attending"}/>,
    <EventCard key="2" eventDate={"12/07"} eventName={"Community Garbage Pickup"} tags={'#Fundraiser #Sports'} numFriends={""}/>,
    <EventCard key="3" eventDate={"12/12"} eventName={"Art Exhibition"} tags={'#Art #Culture'} numFriends={"+ " + 3 + " friends are attending"}/>,
  ];

  
  return (
    <ScrollView style={styles.bodyContainer}>
      <SearchBar></SearchBar>
      <ScrollView 
        style={styles.tagContainer}
        horizontal={true}
      > 
              <TouchableOpacity onPress={() => console.log("Sports buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Fundraiser buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Fundraiser</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Casual buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Casual</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Workshop buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Workshop</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Art buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Tournament</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Art buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Art buttonpress")} style={{backgroundColor:'none',margin: 5}}>
                <Text style={{color: '#ffffff'}}>Volleyball</Text>
              </TouchableOpacity>
      </ScrollView>
      <View>
        {eventArray}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    marginLeft: 10,
    marginRight: 15,
      color: '#ffffff',
  },
  bodyContainer: {
    backgroundColor: "#1356A3",
  },
});