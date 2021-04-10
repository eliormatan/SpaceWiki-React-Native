import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 1,
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 1
  },
  rightContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    flex: 4,
    backgroundColor: 'black',
    padding: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    color: 'lightsteelblue'
  },
  indicatorText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  image: {
    width: 80,
    height: 150,
  },
});
