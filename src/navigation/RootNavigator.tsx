import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import QuestDetailScreen from '../screens/QuestDetailScreen';
import MeditationPlayerScreen from '../screens/MeditationPlayerScreen';
import SoundPlayerScreen from '../screens/SoundPlayerScreen';
import ShortsPlayerScreen from '../screens/ShortsPlayerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Main: undefined;
  QuestDetail: {
    questId: string;
    questTitle: string;
    questImage: string;
    author: string;
  };
  MeditationPlayer: {
    id: string;
    title: string;
    author: string;
    image: string;
    duration: string;
    rating?: number;
  };
  SoundPlayer: {
    id: string;
    title: string;
    author: string;
    image: string;
    rating?: number;
  };
  ShortsPlayer: {
    initialIndex: number;
  };
  Profile: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="QuestDetail"
        component={QuestDetailScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="MeditationPlayer"
        component={MeditationPlayerScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name="SoundPlayer"
        component={SoundPlayerScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name="ShortsPlayer"
        component={ShortsPlayerScreen}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'fullScreenModal',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
