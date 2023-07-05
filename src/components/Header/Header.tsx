import { View, Text } from 'react-native';
import styles from './styles';
import { FC } from 'react';

interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title = 'Title' }) => (
  <View style={styles.titleWrapper}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
