import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <View style={lcStyle.loading}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loading;
const lcStyle = StyleSheet.create({
  loading: {flex: 1, justifyContent: 'center', alignContent: 'center'},
});
