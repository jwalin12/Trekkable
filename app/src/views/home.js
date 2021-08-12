import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ShowSearches from "../../../backend/search";

import { SearchBar } from 'react-native-elements';
import { useState } from "react";
import { History } from "history";
import SearchForHikeHandler from "../../../backend/eventHandlers";
import { useHistory } from 'react-router-dom';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history';
import { View } from "react-native";
import {Link} from 'react-router-native'; 
import { ThemeProvider } from "styled-components";
import { HomeWork } from "@material-ui/icons";

const theme = {
  Button: {
    buttonStyle: [
      {
        backgroundColor: "green",
      }
    ]
  }


}
function Home() {

  const [search, setSearch] = useState('');

  function searchFilterFunction(text) {
    if (text) {
  //make backend request
  axios.get(process.env.SERVER_URI).then(
    (response) => response.filter(
      (val) =>  {if (val.name.toLowerCase().includes(text.toLowerCase())) {
        return val;
      }
    }
    )
    
  )
  //TODO:cacheing

    }

    setSearch(text);

  };

    let history =createBrowserHistory() ;

      return (
  <ThemeProvider theme = {theme}>
  <SearchBar
          placeholder="Type Here..."
          onChangeText={this.searchFilterFunction(search)}
          value={search}
        />

  </ThemeProvider>  

      );
    
}

export default Home;
