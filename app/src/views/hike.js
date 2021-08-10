
import React, { useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import {NativeBaseProvider,Box, Text,Pressable,Heading,IconButton,Icon, HStack, Avatar, VStack } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons,Ionicons, AntDesign } from '@expo/vector-icons';
import { right } from 'styled-system';

export default function Hike(hikeName, trailStatus, parkingLot, bearSightings) {
    const [mode, setMode] = useState('Basic');

    return (
      <NativeBaseProvider >
        <Box textAlign="center" bg= 'white' flex= {1} safeAreaTop>
          <Heading my={6} textAlign="center" size="lg">{hikeName}</Heading>
            <Basic trailStatus = {trailStatus} parkingLot = {parkingLot} bearSightings = {bearSightings} />
        </Box>
        </NativeBaseProvider>
    );
}

function genEntry({key, value}) {
  return (
    <HStack>
    <Center>
      {key}
    </Center>
    <Center>
      {value}
    </Center>
  </HStack>

  );
}

function Basic() {
  const tableEntries = props.map(genEntry)
  return (<VStack>
    {tableEntries}
    </VStack>);

}


