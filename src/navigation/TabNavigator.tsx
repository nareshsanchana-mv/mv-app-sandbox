import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

// Screens
import TodayScreen from '../screens/TodayScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import EveAIScreen from '../screens/EveAIScreen';
import MeditationsScreen from '../screens/MeditationsScreen';
import CommunityScreen from '../screens/CommunityScreen';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Button for Eve AI (center floating button)
const EveAIButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={styles.eveButton}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.eveButtonInner}>
      {children}
    </View>
  </TouchableOpacity>
);

// Eve AI Icon component
const EveAIIcon = ({ focused }: { focused: boolean }) => (
  <View style={[styles.eveIcon, focused && styles.eveIconFocused]}>
    <Ionicons name="cube-outline" size={24} color="#fff" />
  </View>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? "today" : "today-outline"}
                size={24}
                color={color}
              />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Programs"
        component={ProgramsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? "bar-chart" : "bar-chart-outline"}
                size={24}
                color={color}
              />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Eve AI"
        component={EveAIScreen}
        options={{
          tabBarIcon: ({ focused }) => <EveAIIcon focused={focused} />,
          tabBarButton: (props) => <EveAIButton {...props} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Meditations"
        component={MeditationsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? "leaf" : "leaf-outline"}
                size={24}
                color={color}
              />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={24}
                color={color}
              />
              {focused && <View style={styles.activeIndicator} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    height: 85,
    paddingTop: 8,
    paddingBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
  },
  iconContainer: {
    alignItems: 'center',
  },
  activeIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
    marginTop: 4,
  },
  eveButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eveButtonInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  eveIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eveIconFocused: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
