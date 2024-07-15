import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Menu,
  Submenu,
  Soal,
  Hasil,
  Pembahasan,

} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Submenu"
        component={Submenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Soal"
        component={Soal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hasil"
        component={Hasil}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pembahasan"
        component={Pembahasan}
        options={{
          headerShown: false,
        }}
      />


    </Stack.Navigator>
  );
}
