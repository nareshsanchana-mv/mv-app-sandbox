import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Section from '../components/Section';
import ProgramCard from '../components/ProgramCard';
import ContinueProgramCard from '../components/ContinueProgramCard';
import { colors } from '../theme/colors';
import { continuePrograms, popularPrograms, freePrograms } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

const TABS = ['Discover', 'Coach', 'Recordings', 'Courses'];
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ProgramsScreen() {
  const [activeTab, setActiveTab] = useState('Discover');
  const navigation = useNavigation<NavigationProp>();

  const goToQuest = (id: string, title: string, image: string, author: string) =>
    navigation.navigate('QuestDetail', { questId: id, questTitle: title, questImage: image, author });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tabItem}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.languagePill}>
          <Ionicons name="globe-outline" size={14} color={colors.textSecondary} />
          <Text style={styles.languageText}>English (EN)</Text>
        </View>

        {/* Hot in your region */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hot in Malaysia</Text>
          <TouchableOpacity>
            <Ionicons name="globe-outline" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.numberedList}>
          {popularPrograms.map((program, index) => (
            <TouchableOpacity
              key={program.id}
              style={styles.numberedCard}
              onPress={() => goToQuest('silva-ultramind', program.title, program.image, program.author)}
              activeOpacity={0.85}
            >
              <Image source={{ uri: program.image }} style={styles.numberedImage} />
              <Text style={styles.rankNumber}>{index + 1}</Text>
              <Text style={styles.numberedTitle} numberOfLines={2}>{program.title}</Text>
              <Text style={styles.numberedAuthor} numberOfLines={1}>{program.author}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Continue Programs */}
        <Section title="Continue programs" showSeeAll horizontal>
          {continuePrograms.map((program) => (
            <ContinueProgramCard
              key={program.id}
              {...program}
              onPress={() => goToQuest('silva-ultramind', program.programName, program.image, program.author)}
            />
          ))}
        </Section>

        {/* Author Collections */}
        <Section title="Author collections" showSeeAll horizontal>
          {freePrograms.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
              size="medium"
              onPress={() => goToQuest('silva-ultramind', program.title, program.image, program.author)}
            />
          ))}
        </Section>

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabItem: { marginRight: 24, paddingBottom: 12, position: 'relative' },
  tabText: { fontSize: 16, fontWeight: '500', color: colors.textMuted },
  tabTextActive: { color: colors.textPrimary, fontWeight: '700' },
  tabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: colors.textPrimary,
    borderRadius: 1,
  },
  languagePill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    gap: 6,
  },
  languageText: { fontSize: 13, color: colors.textSecondary },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  numberedList: { paddingHorizontal: 20, marginBottom: 32 },
  numberedCard: { width: 155, marginRight: 14 },
  numberedImage: {
    width: '100%',
    height: 155,
    borderRadius: 12,
    backgroundColor: colors.backgroundCard,
    marginBottom: 6,
  },
  rankNumber: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: 2,
  },
  numberedTitle: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginBottom: 2 },
  numberedAuthor: { fontSize: 12, color: colors.textSecondary },
  bottomPad: { height: 100 },
});
