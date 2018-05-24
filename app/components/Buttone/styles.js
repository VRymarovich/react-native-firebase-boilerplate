import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export default StyleSheet.create({
  background: {
    padding: 15,
    backgroundColor: colors.color5,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: colors.color2,
    fontSize: 16,
    fontFamily: fonts.thin,
    fontWeight: '500',
  },
});
