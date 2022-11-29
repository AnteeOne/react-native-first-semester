import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white'
  },
  title: {
    marginBottom: 32,

    color: 'black',
    fontSize: 32,
    fontWeight: 'bold'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    maxWidth: 400,

    marginVertical: 16
  },
  text: {
    width: '100%',
    height: 80,

    marginBottom: 18,
    padding: 8,
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,

    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
