import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppNavigation from './src/screens/AppNavigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => <NavigationContainer>
  <AppNavigation/>
  <StatusBar style="auto"/>
</NavigationContainer>;

export default App