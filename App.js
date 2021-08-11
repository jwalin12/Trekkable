
import React, { useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import {NativeBaseProvider,Box, Text,Pressable,Heading,IconButton,Icon, HStack, Avatar } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons,Ionicons, AntDesign } from '@expo/vector-icons';
import Home from './app/src/views/home';
import { NativeRouter, Route } from 'react-router-native';
import SearchForHikeHandler from './backend/eventHandlers';
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <div>
    <NativeRouter>
      
      <Route exact path = "/no" component = {Home}></Route>
      <Route exact path = "/hello" render = {({ match }) => SearchForHikeHandler(match)
      }></Route>
    </NativeRouter>
     
     </div>
  )
  
}

AppRegistry.registerComponent("MyApp", () => App);