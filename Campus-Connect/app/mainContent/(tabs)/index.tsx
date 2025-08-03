import React from 'react';
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image, ImageBackground } from 'expo-image';
import EventCard from '../../components/event';
import ListFriends from '../../components/getFriends';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import styles from "../../css/style";

export default function Index() {
  return (
    <ScrollView style={styles.homeContainer}>
      <View>
        {/* NOTE FOR ALL IMAGES: Placing them in the root assets/images folder outside of app allows expo to access those images from anywhere in the project */}
        <ImageBackground source={require('../../assets/images/bu_background.jpg')} style={styles.homeImage}/>

      </View>

      <Text>Hi!</Text>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
      }}>

        <View style={styles.profilePic}>
          <Image source={require('../../assets/images/dashboard_icon.svg')} style={{
            width: 50,
            height: 50,
          }}/>
        </View>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '70%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Link style={styles.pageButton} href="./events">Edit Profile</Link>
          <Link style={styles.pageButton} href="./store">Points Store</Link>
        </View>
      </View>

      <View style={styles.statsDiv}>
        <View style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{padding: 10,}}>Season Points: 12345</Text>
          <Text style={{padding: 10,}}>Point Multiplier: 1x</Text>

        </View>
        <Text style={{
          margin: 'auto',
        }}>Spendable Points: 12345</Text>

      </View>

      <View style={styles.friendActivity}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}>
          <Text style={styles.plainText}>Friend Activity</Text>

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>

            <Text style={styles.plainText}>Add Friends</Text>

            <View style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 50,
              borderStyle: 'solid',
              borderColor: '#FFFFFF',
              borderWidth: 2,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FontAwesome6 name='plus' color={"#F79E1B"} size={20}/>
            </View>
          </View>
        </View>
        <ListFriends></ListFriends>

      </View>


      <View>
        <EventCard></EventCard>

      </View>
    </ScrollView>
    

  );
}

const styles = StyleSheet.create({

  homeContainer: {
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    backgroundColor: "#1356A3",


  },

  homeImage: {
    width: 450,
    height: 200,

  },

  profilePic: {
    backgroundColor: "#0056A3",
    backgroundImage: '',
    borderColor: '#FFFFFF',
    borderWidth: 2,

    width: 100,
    height: 100,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },


  pageButton: {
    backgroundColor: '#F79E1B',
    color: '#FFFFFF',


    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  statsDiv: {
    backgroundColor: '#F79E1B',
    width: '100%',
    height: 100,
  },

  friendActivity: {
    width: '90%',
    margin: 'auto',

  },

  plainText: {
    color: '#FFFFFF',
  }


});
