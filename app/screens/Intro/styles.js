import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
import { fonts } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.color1,
  },
  text: {
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: fonts.monotype
  }
});
