import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
