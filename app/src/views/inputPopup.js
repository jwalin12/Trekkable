import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import Dialog from "react-native-dialog";



const inputPopup = (title) => {


    return (
        <View style={styles.container}>
        <Button title="Show dialog" onPress={showDialog} />
        <Dialog.Container visible={visible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
      </View>
    );


}

export default inputPopup;