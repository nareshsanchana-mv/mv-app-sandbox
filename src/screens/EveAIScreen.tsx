import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { useUser } from '../context/UserContext';

const SUGGESTIONS = [
  "I'm feeling stressed, tired, or seeking better sleep.",
  "I'm looking to lose weight and improve my fitness.",
  "I want to develop a growth mindset and increase my self-confidence.",
  "I want to enhance my leadership skills, build a strong team and inspire others.",
];

export default function EveAIScreen() {
  const { userName } = useUser();
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <View style={styles.topBarRight}>
          <TouchableOpacity style={styles.topBarIcon}>
            <Ionicons name="eye-outline" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarIcon}>
            <Ionicons name="close" size={22} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.eveIconContainer}>
          <Ionicons name="aperture" size={44} color={colors.primary} />
        </View>
        <Text style={styles.greeting}>Hi, {userName}</Text>
        <Text style={styles.subtitle}>How can I help you today?</Text>

        <View style={styles.suggestionsGrid}>
          {SUGGESTIONS.map((suggestion, i) => (
            <TouchableOpacity key={i} style={styles.suggestionCard} activeOpacity={0.8}>
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <View style={styles.inputBar}>
            <TextInput
              style={styles.input}
              placeholder="Ask Eve AI..."
              placeholderTextColor={colors.textMuted}
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity>
              <Ionicons name="mic-outline" size={22} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.disclaimer}>
            EVE AI provides general information only. It is not medical, financial, therapeutic, or professional advice, and may not reflect Mindvalley's views or always be accurate.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  topBarRight: { flexDirection: 'row' },
  topBarIcon: { marginLeft: 20 },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
  },
  eveIconContainer: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 48,
  },
  suggestionsGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  suggestionCard: {
    width: '47%',
    backgroundColor: colors.backgroundCard,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  suggestionText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '400',
    lineHeight: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 8,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 16,
  },
  disclaimer: {
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
  },
});
