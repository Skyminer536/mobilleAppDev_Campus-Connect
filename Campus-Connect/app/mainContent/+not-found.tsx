import React from 'react';
import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import styles from "../css/style";

export default function pageNotFound() {
    
  return (
    <>
    <Stack.Screen options={{title:"Oops! You messed up!"}}/>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text style={styles.header1}>Oops!</Text>
        <Link href="../" style={styles.button}>Back to Home</Link>

    </View>
  </>
  );
}
