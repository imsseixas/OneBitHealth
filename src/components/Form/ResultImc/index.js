import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const ResultImc = (props) => {
  return (
    <View style={styles.numberImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
};

export default ResultImc;
