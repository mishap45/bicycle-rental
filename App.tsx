import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppNavigation from './src/screens/AppNavigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://192.168.1.111:4000/graphql',
    cache: new InMemoryCache()
});

const App = () => <ApolloProvider client={client}>
    <NavigationContainer>
        <AppNavigation/>
        <StatusBar style="auto"/>
    </NavigationContainer>
</ApolloProvider>;

export default App