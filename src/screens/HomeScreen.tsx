import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen = () => {
   return (
      <View style={ styles.container }>
         <Text style={ styles.text }> Hello world !! </Text>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
   },
   text: {
      fontSize: 35,
      fontWeight: 'bold'
   }
})