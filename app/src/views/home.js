import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ShowSearches from "../../../backend/search";

import { SearchBar } from 'react-native-elements';
import { History } from "history";
import SearchForHikeHandler from "../../../backend/eventHandlers";
import { useHistory } from 'react-router-dom';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history';
import { View } from "react-native";
import {Link} from 'react-router-native'; 
import { ThemeProvider } from "styled-components";
import JSONDATA from "./mockdata/mockHike.json"

const theme = {
  Button: {
    buttonStyle: [
      {
        backgroundColor: "green",
      }
    ]
  }


}



export default class Home extends React.Component {
  state = {
    search: '',
  };

  

  updateSearch = (search) => {
    this.setState({search });
  };

  searchFilterFunction(text) {
      if (text) {
    //make backend request
    JSONDATA.filter(
        (val) =>  {if (val.name.toLowerCase().includes(text.toLowerCase())) {
          return val;
        }
      }
      );
    //TODO:cacheing

    this.setState({text})
  
      }


    
  }

  render() {
    const { search } = this.state;
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
}

