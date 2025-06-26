import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const LoadingScreen = () => {
   return (
      <View style={ styles.container }>
         <Text style={ styles.text }> LoadingScreen </Text>
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