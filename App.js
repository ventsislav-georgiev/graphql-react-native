import React from 'react';
import {useState, useEffect} from 'react';
import {StatusBar, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
// import NetInfo from '@react-native-community/netinfo';

import {ClientProvider, newClient} from 'graphql-react-sdk';

import Loading from './src/common/Loading';
import Home from './src/views/Home';
import NewsList from './src/views/news/List';
import NewsAdd from './src/views/news/Add';
import NewsEdit from './src/views/news/Edit';
import BlogsList from './src/views/blogs/List';
import BlogsAdd from './src/views/blogs/Add';
import BlogsEdit from './src/views/blogs/Edit';
import BlogPostsList from './src/views/blogposts/List';
import BlogPostsAdd from './src/views/blogposts/Add';
import BlogPostsEdit from './src/views/blogposts/Edit';
import EventsList from './src/views/events/List';
import EventsAdd from './src/views/events/Add';
import EventsEdit from './src/views/events/Edit';
import CalendarsList from './src/views/calendars/List';
import CalendarsAdd from './src/views/calendars/Add';
import CalendarsEdit from './src/views/calendars/Edit';
import BooksList from './src/views/books/List';
import BooksAdd from './src/views/books/Add';
import BooksEdit from './src/views/books/Edit';
import AuthorsList from './src/views/authors/List';
import AuthorsAdd from './src/views/authors/Add';
import AuthorsEdit from './src/views/authors/Edit';

const Stack = createStackNavigator();

// create client
const apiClient = newClient();
const cacheReadyPromise = apiClient.persistCache(AsyncStorage);

function App() {
  const [isConnected, setIsConnected] = useState(true);
  const [pendingOps, setPendingOps] = useState(
    apiClient.pendingOperations.size,
  );
  const [cacheReady, setCacheReady] = useState(false);

  cacheReadyPromise.then(() => setCacheReady(true));

  // update network state
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     apiClient.setNetworkState(state.isConnected);
  //   });
  //   return () => unsubscribe();
  // }, [apiClient]);

  // check pending ops for UI update
  useEffect(() => {
    setInterval(() => {
      setPendingOps(apiClient.pendingOperations.size);
    }, 1000);
  }, []);

  useEffect(() => {
    apiClient.setNetworkState(isConnected);
  }, [isConnected]);

  if (!cacheReady) {
    return <Loading />;
  }

  return (
    <ClientProvider client={apiClient}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="News" component={NewsList} />
            <Stack.Screen name="News Add" component={NewsAdd} />
            <Stack.Screen name="News Detail" component={NewsEdit} />
            <Stack.Screen name="Blogs" component={BlogsList} />
            <Stack.Screen name="Blogs Add" component={BlogsAdd} />
            <Stack.Screen name="Blogs Detail" component={BlogsEdit} />
            <Stack.Screen name="BlogPosts" component={BlogPostsList} />
            <Stack.Screen name="BlogPosts Add" component={BlogPostsAdd} />
            <Stack.Screen name="BlogPosts Detail" component={BlogPostsEdit} />
            <Stack.Screen name="Events" component={EventsList} />
            <Stack.Screen name="Events Add" component={EventsAdd} />
            <Stack.Screen name="Events Detail" component={EventsEdit} />
            <Stack.Screen name="Calendars" component={CalendarsList} />
            <Stack.Screen name="Calendars Add" component={CalendarsAdd} />
            <Stack.Screen name="Calendars Detail" component={CalendarsEdit} />
            <Stack.Screen name="Books" component={BooksList} />
            <Stack.Screen name="Books Add" component={BooksAdd} />
            <Stack.Screen name="Books Detail" component={BooksEdit} />
            <Stack.Screen name="Authors" component={AuthorsList} />
            <Stack.Screen name="Authors Add" component={AuthorsAdd} />
            <Stack.Screen name="Authors Detail" component={AuthorsEdit} />
          </Stack.Navigator>
          <StatusBar barStyle={'dark-content'} />
        </NavigationContainer>
        <Text> </Text>
        <View>
          <Text style={{textAlign: 'center'}}>
            Network Status: {isConnected ? 'Online' : 'Offline'}
          </Text>
          <Text style={{textAlign: 'center'}}>
            Pending Operations: {pendingOps}
          </Text>
          <Button
            title={isConnected ? 'Go Offline' : 'Go Online'}
            onPress={() => setIsConnected(!isConnected)}
          />
        </View>
        <Text> </Text>
        <Text> </Text>
      </View>
    </ClientProvider>
  );
}

export default App;
