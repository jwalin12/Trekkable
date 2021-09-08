import React, { useState} from 'react';

import Hike from './app/src/views/hike'
import './app/src/App.css'
import posts from './app/src/views/mockdata/mockHike.json';

import HomeScreen from './app/src/views/search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMemoryHistory } from 'history';
import HikeSearchView from './app/src/views/search';
import HikeScreen from './app/src/views/hike';





const App = () => {
  let history = createMemoryHistory();
  let Stack = createNativeStackNavigator();
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
              <Stack.Screen name = "Home" component={() => <HikeSearchView data={posts}></HikeSearchView>} />
              <Stack.Screen name = "Hike" component= {HikeScreen}/>

            </Stack.Navigator>

          </NavigationContainer>

  );
};

export default App;