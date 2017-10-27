import React from 'react';
import { View } from 'react-native';
import { Constants } from 'expo';
import { StatusBar } from 'react-native';

export default function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} { ...props} />
    </View>
  )
}