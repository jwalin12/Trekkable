import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";


const inputPopup = (title) => {
    Alert.alert(
        title,
        "What is your update?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Update", onPress: () => console.log("OK Pressed") }
        ]

    )

}

export default inputPopup;