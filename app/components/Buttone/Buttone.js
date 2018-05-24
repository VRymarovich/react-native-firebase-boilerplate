import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Buttone = (props) => {
  let { text, onPress } = props;
  text = text?text:Buttone.defaultProps.text;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.background}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};



Buttone.defaultProps = {
  text: 'Button Text',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};


export default Buttone;
/*

*/
