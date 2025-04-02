import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Fitness App',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="Workout" 
            component={WorkoutScreen}
            options={{
              title: 'Workouts',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; 