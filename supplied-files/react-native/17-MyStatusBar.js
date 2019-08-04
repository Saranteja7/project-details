import React from 'react';
import { StatusBar } from 'react-native'

const MyStatusBar = () => {
   return (
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true} />
   )
}
export default MyStatusBar;