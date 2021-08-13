import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {viewStyles} from './styles';

function Loading() {
  return (
    <View style={viewStyles.centered}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Loading;
