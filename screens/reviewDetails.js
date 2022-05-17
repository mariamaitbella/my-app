import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';


export default function ReviewDetails({navigation}){
    return(
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button
          title="Back to Home"
          onPress={() => navigation.goBack()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
});