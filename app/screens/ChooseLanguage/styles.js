import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.color1,
  },
  headerText: {
    marginTop: 30,
    color: colors.color2,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: fonts.monotype
  },
  titleText: {
    color: colors.color5,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: fonts.thin
  }
});
