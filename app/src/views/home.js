import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ShowSearches from "../../../backend/search";

import { SearchBar } from 'react-native-elements';
import { History } from "history";
import SearchForHikeHandler from "../../../backend/eventHandlers";
import {createMemoryHistory} from 'history';
import { View } from "react-native";

export default class Home extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    let history = createMemoryHistory();

    return (
      <NativeBaseProvider>
              <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}

      />
      <Button onPress= {history.push("hike/".concat(this.state.text))}>
        Search
      </Button>
      </NativeBaseProvider>

    );
  }
}

