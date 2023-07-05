import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { Header } from './components/Header/Header';
import { Item } from './components/Item/Item';
import styles from './styles';

const numbers: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export default function App() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header title={'Title'} />
        {numbers.map((number) => (
          <Item
            key={number}
            number={number}
            title={'Test'}
          />
        ))}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


