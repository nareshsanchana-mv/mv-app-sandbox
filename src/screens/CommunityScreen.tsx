import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="people" size={48} color={colors.primary} />
        </View>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>
          Connect with fellow learners and share your growth journey.
        </Text>
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  comingSoon: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  comingSoonText: {
    ...typography.label,
    color: '#fff',
    fontWeight: '600',
  },
});
