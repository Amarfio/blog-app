import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexPage from './pages/IndexPage';
import BlogPage from './pages/BlogPage';
import { View, Image, StyleSheet, Text  } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexPage} options={{headerShown:false}}/>
        <Stack.Screen name="BlogPage" component={BlogPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
