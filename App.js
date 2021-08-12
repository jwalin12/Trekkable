
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
import { Link, NativeRouter, Route,Switch } from 'react-router-native';
import SearchForHikeHandler from './backend/eventHandlers';
import { AppRegistry } from 'react-native';
import SearchBar from './app/src/components/SearchBar';

export default function App() {
  return (
    <NativeRouter>
      <Switch>
      <Route exact path = "/" render = {Home}></Route>
      <Route exact path = "/hike/:val" render = {({ match }) => SearchForHikeHandler(match)
      }></Route>
      </Switch>
    </NativeRouter>

    


    
  )
  
}

