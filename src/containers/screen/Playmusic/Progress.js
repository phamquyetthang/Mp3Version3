import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Progress = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 1);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={([StyleSheet.absoluteFill], {backgroundColor: '#3252CE', width})}
      />
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    height: 4,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
