
import React, { useState } from 'react';

import { DataTable, Provider, View, Button, Modal, Portal } from 'react-native-paper';
import { NativeBaseProvider, Heading, Box } from 'native-base';


export default function HikeScreen({ route }) {
    const [mode, setMode] = useState('Basic');
    const { hikeData } = route.params;
    let hikeName = hikeData.name;
    let trailStatus = hikeData.trailStatus;
    let parkingLot = hikeData.parkingLot;
    let bearSightings = hikeData.bearSightings;

    return (
      <NativeBaseProvider>
           <Box textAlign="center" bg= 'white' flex= {1} safeAreaTop>
          <Heading my={6} textAlign="center" size="lg">{hikeName}</Heading>
            <HikeTable trailStatus={trailStatus} parkingLot={parkingLot} bearSightings={bearSightings} />
        </Box>
      </NativeBaseProvider>
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
      <Button color = 'green' dark = 'true' mode= "text" onPress = {() => setTrailStatusPopupVisible(true)}> Trail Status</Button>
    </DataTable.Cell>
    <DataTable.Cell>
      {props.trailStatus}
    </DataTable.Cell>
</DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>
    <Button color = 'green' dark = 'true' mode= "text" onPress = {() => setParkingLotPopupVisible(true)}> Parking Lot </Button>
    </DataTable.Cell>
    <DataTable.Cell>
      {props.parkingLot}
    </DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
    <DataTable.Cell>
    <Button color = 'green' dark = 'true' mode= "text" onPress = {() => setBearStatusPopupVisible(true)}>  Bear Sightings </Button>
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
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setParkingLotPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  <Portal>
<Modal visible = {BearSightingStatusPopupVisible} contentContainerStyle = {containerStyle}>
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setBearStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  </Provider>
</DataTable>

  );

}


