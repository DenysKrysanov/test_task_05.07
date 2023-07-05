import { Text, View } from 'react-native'
import styles from './styles'

interface Props {
  number: number;
  title: string;
}

export const Item = ({ number, title = 'test' }: Props) => {
  return (
    <View style={styles.testWrapper}>
      <Text style={styles.testText}>{title}</Text>
      <Text style={styles.testText}>{number}</Text>
    </View>
  )
}


