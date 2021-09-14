
import React, { Fragment, useState } from 'react';
import {
    Dimensions,
    TouchableOpacity,
    View,
    Button
} from 'react-native';
import inputPopup from './inputPopup';
import {NativeBaseProvider,Box,Heading, HStack} from 'native-base';
import {DataTable, Modal, Portal, Provider} from 'react-native-paper';

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
            <HikeTable trailStatus={trailStatus} parkingLot={parkingLot} bearSightings={bearSightings} />
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

function HikeTable(props) {
  const [TrailStatusPopupVisible,setTrailStatusPopupVisible] = useState(false);
  const [ParkingLotStatusPopupVisible,setParkingLotPopupVisible] = useState(false);
  const [BearSightingStatusPopupVisible,setBearStatusPopupVisible] = useState(false);
  const containerStyle = {backgroundColor: 'white', padding: 100};


  return (


    <DataTable>
    <DataTable.Row>
    <DataTable.Cell>
      <Button title = {"Trail Status"} onPress = {() => setTrailStatusPopupVisible(true)}></Button>
      {"Trail Status"}
    </DataTable.Cell>
    <DataTable.Cell>
      {props.trailStatus}
    </DataTable.Cell>
  
</DataTable.Row>

<DataTable.Row>
    <DataTable.Cell>
      {"Parking Lot"}
    </DataTable.Cell>
    <DataTable.Cell>
      {props.parkingLot}
    </DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
    <DataTable.Cell>
      {"Bear Sightings"}
    </DataTable.Cell>
    <DataTable.Cell>
      {props.bearSightings}
    </DataTable.Cell>
</DataTable.Row> 
<Provider>
  <Portal>
<Modal visible = {TrailStatusPopupVisible} contentContainerStyle = {containerStyle}>
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setTrailStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  <Portal>
<Modal visible = {ParkingLotStatusPopupVisible} contentContainerStyle = {containerStyle}>
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setTrailStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  <Portal>
<Modal visible = {BearSightingStatusPopupVisible} contentContainerStyle = {containerStyle}>
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setTrailStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  </Provider>
</DataTable>



  );

}


