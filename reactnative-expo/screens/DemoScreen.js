import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

//


import firebase from 'firebase'
firebase.initializeApp(config);

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function loginWithFacebook() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '<APP_ID>',
    { permissions: ['public_profile'] }
  );

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInWithCredential(credential).catch((error) => {
      // Handle Errors here.
    });
  }
}


//
export default class DemoScreen extends React.Component {
  static navigationOptions = {
    title: "Demo"
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text> Demo Screen </Text>{" "}
        </View>{" "}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
