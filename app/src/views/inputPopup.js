import { ViewAgendaTwoTone, Visibility } from "@material-ui/icons";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';



function inputPopup(props) {

  if (!props.open) {
    return null;

  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={props.onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
  
}

export default inputPopup;