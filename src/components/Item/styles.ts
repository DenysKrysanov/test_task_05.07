import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  testWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    marginTop: 44,
    marginHorizontal: 32,
    paddingHorizontal: 16,

    height: height * 0.1,

    backgroundColor: '#000066'
  },

  testText: {
    fontSize: 24,
    color: 'white',

    display: 'flex',
    alignItems: 'center',
  }
})

export default styles;
