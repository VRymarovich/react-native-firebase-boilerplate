import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.color1,
  },
  block: {
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.color5,
    borderRadius: 10,
    margin: 5,
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
  },
  textInput: {
    margin: 5,
    color: colors.color3,
    fontSize: 20,
    width: 200,
    fontFamily: fonts.thin,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.color4,
    backgroundColor: colors.color5,
  }
});
