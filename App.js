import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './components/Tabs';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" barStyle="dark-content"/>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
