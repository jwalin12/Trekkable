
import React, { useState } from 'react';

import { DataTable, Provider, View, Button, Modal, Portal, TextInput } from 'react-native-paper';
import { NativeBaseProvider, Heading, Box } from 'native-base';


export default function HikeScreen({ route }) {
    const { hikeData } = route.params;
    const hikeName = hikeData.name;
    const [mode, setMode] = useState('Basic');
    const[trailStatus, setTrailStatus] = React.useState(hikeData.trailStatus);
    const [parkingLotStatus, setParkingLotStatus] = React.useState(hikeData.parkingLot);
    const [bearSightingsStatus, setBearSightingsStatus] =  React.useState(hikeData.bearSightings);
    const [TrailStatusInputText, setTrailStatusInputText] = React.useState('');
    const [ParkingLotInputText, setParkingLotInputText] = React.useState('');
    const [BearSightingInputText, setBearSightingInputText] = React.useState('');


    return (
      <NativeBaseProvider>
           <Box textAlign="center" bg= 'white' flex= {1} safeAreaTop>
          <Heading my={6} textAlign="center" size="lg">{hikeName}</Heading>
            <HikeTable/>
        </Box>
      </NativeBaseProvider>
    );


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
      {trailStatus}
    </DataTable.Cell>
</DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>
    <Button color = 'green' dark = 'true' mode= "text" onPress = {() => setParkingLotPopupVisible(true)}> Parking Lot </Button>
    </DataTable.Cell>
    <DataTable.Cell>
      {parkingLotStatus}
    </DataTable.Cell>
</DataTable.Row>
<DataTable.Row>
    <DataTable.Cell>
    <Button color = 'green' dark = 'true' mode= "text" onPress = {() => setBearStatusPopupVisible(true)}>  Bear Sightings </Button>
    </DataTable.Cell>
    <DataTable.Cell>
      {bearSightingsStatus}
    </DataTable.Cell>
</DataTable.Row> 
<Provider>
  <Portal>
<Modal visible = {TrailStatusPopupVisible} contentContainerStyle = {containerStyle}>
  {trailStatus}
  <TextInput label = "Updates?">
    </TextInput>
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setTrailStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  <Portal>
<Modal visible = {ParkingLotStatusPopupVisible} contentContainerStyle = {containerStyle}>
{parkingLotStatus}
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setParkingLotPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  <Portal>
<Modal visible = {BearSightingStatusPopupVisible} contentContainerStyle = {containerStyle}>
  {bearSightingsStatus}
  <Button icon="alpha-x-circle" mode="contained" color = "red" dark = "true" onPress = {() => setBearStatusPopupVisible(false)}>Cancel</Button>
</Modal>
  </Portal>
  </Provider>
</DataTable>

  );

}

}


