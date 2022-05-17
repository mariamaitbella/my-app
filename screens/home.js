import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
 

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>hoooojoome</Text>
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('ReviewDetails')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
