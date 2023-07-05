import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: 'white',
  },

  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: height * 0.3,

    backgroundColor: '#3366ff'
  }
})

export default styles;
