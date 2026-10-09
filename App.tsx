import React from 'react'
import { StyleSheet, View } from 'react-native'
import Counter from './src/counter/Counter'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
   <SafeAreaView style={styles.container}>
    <Counter/>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
  }
})
export  default App