
import React, { useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import {NativeBaseProvider,Box, Text,Pressable,Heading,IconButton,Icon, HStack, Avatar, VStack } from 'native-base';

export default function HikeScreen({route, navigation}) {
    const [mode, setMode] = useState('Basic');
    const { hikeData } = route.params;
    let hikeName = hikeData.name;
    let trailStatus = hikeData.trailStatus;
    let parkingLot = hikeData.parkingLot;
    let bearSightings = hikeData.bearSightings;

    return (
      <NativeBaseProvider >
        <Box textAlign="center" bg= 'white' flex= {1} safeAreaTop>
          <Heading my={6} textAlign="center" size="lg">{hikeName}</Heading>
            <Basic trailStatus = {{status: trailStatus}} parkingLot = {parkingLot} bearSightings = {bearSightings} />
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

function Basic(props) {
  return (<VStack>
    </VStack>);

}


