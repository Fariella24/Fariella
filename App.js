import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.jsx';
import Profilo from './screens/Profilo.jsx';
import Login from './screens/Login.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Create from './screens/Create.jsx'
import SessionProvider from './utils/context.js';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profilo" component={Profilo} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Create" component={Create} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SessionProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Tabs />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </SessionProvider>
  );
}
const logged = false 