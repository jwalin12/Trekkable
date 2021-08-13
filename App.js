import React, { useState} from 'react';
import { TouchableOpacity, FlatList,Text }from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import logo from './app/src/logo.svg'
import Hike from './app/src/views/hike'
import './app/src/App.css'
import Search from './app/src/views/search';
import Announcer from './app/src/views/announcer';
import posts from './app/src/views/mockdata/mockHike.json';
import { FormatPaint, Home } from '@material-ui/icons';
import HikeSearchView from './app/src/views/search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMemoryHistory } from 'history';


const Stack = createNativeStackNavigator();


const App = () => {
  let history = createMemoryHistory();

  return (
          // <div className="App">

          //   <NativeRouter>
          //       <Route exact path ="/" >
          //       <HikeSearchView data = {posts} history= {history}></HikeSearchView>
          //       </Route>
          //       <Route path = "/hike">
          //         <Hike ></Hike>
          //       </Route>
          //   </NativeRouter>
           
          // </div>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name = "Home" component= {() => <HikeSearchView data = {posts}></HikeSearchView>}/>
              <Stack.Screen name = "Hike" component= {() => <Hike></Hike>}/>




            </Stack.Navigator>

          </NavigationContainer>

  );
};

export default App;