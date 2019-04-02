import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default class DemoScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <View>
          <Text>Demo Screen</Text>
        </View>
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
