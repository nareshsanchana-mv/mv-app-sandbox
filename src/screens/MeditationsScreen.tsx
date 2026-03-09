import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Section from '../components/Section';
import { colors } from '../theme/colors';
import { todayMeditations } from '../data/mockData';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

const TABS = ['All', 'Meditation', 'Soundscape', 'Sound Healing'];
const DURATION_FILTERS = ['UNDER 5 MINS', 'UNDER 10 MINS', 'UNDER 20 MINS'];

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FAVORITES = [
  { id: '1', title: 'Clearing Mental Clutter With Sacred Geometry', author: 'Jeffrey Allen', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400', round: false },
  { id: '2', title: 'Leo', author: 'Gabriel Loynaz', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', round: true },
];

const TOP_RATED = [
  { id: '1', title: 'Ocean Healing', author: 'Gabriel Loynaz', rating: 4.9, image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=200' },
  { id: '2', title: '528 Hz – The Love Frequency', author: 'Gabriel Loynaz', rating: 4.9, image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200' },
  { id: '3', title: 'Throat Chakra – Communication', author: 'Gabriel Loynaz', rating: 4.9, image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200' },
  { id: '4', title: 'Root Chakra', author: 'Gabriel Loynaz', rating: 4.9, image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200' },
];

export default function MeditationsScreen() {
  const [activeTab, setActiveTab] = useState('All');
  const navigation = useNavigation<NavigationProp>();

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
        {/* Daily Target */}
        <View style={styles.targetCard}>
          <View style={styles.targetIcon}>
            <Ionicons name="radio-button-on" size={28} color={colors.teal} />
          </View>
          <View style={styles.targetText}>
            <Text style={styles.targetLabel}>Daily target</Text>
            <Text style={styles.targetProgress}>0 / 5 mins</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Favorites */}
        <Section title="Favorites" horizontal>
          {FAVORITES.map((item) => (
            <TouchableOpacity key={item.id} style={styles.favCard} activeOpacity={0.85}>
              <Image
                source={{ uri: item.image }}
                style={[styles.favImage, item.round && styles.favImageRound]}
              />
              <Text style={styles.favTitle} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.favAuthor}>{item.author}</Text>
            </TouchableOpacity>
          ))}
        </Section>

        {/* Top Rated */}
        <View style={styles.topRatedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top rated</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
          </View>
          <View style={styles.topRatedGrid}>
            {TOP_RATED.map((item) => (
              <TouchableOpacity key={item.id} style={styles.topRatedItem} activeOpacity={0.85}>
                <Image source={{ uri: item.image }} style={styles.topRatedThumb} />
                <View style={styles.topRatedMeta}>
                  <Text style={styles.topRatedTitle} numberOfLines={2}>{item.title}</Text>
                  <Text style={styles.topRatedAuthor}>{item.author}</Text>
                  <View style={styles.ratingRow}>
                    <Text style={styles.ratingText}>{item.rating}</Text>
                    <Text> ⭐</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Your Meditations for Today */}
        <View style={styles.todaySection}>
          <Text style={styles.todaySectionTitle}>Your meditations for today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.durationFilters}>
            {DURATION_FILTERS.map((f) => (
              <View key={f} style={styles.durationPill}>
                <Ionicons name="time-outline" size={11} color={colors.textMuted} />
                <Text style={styles.durationText}>{f}</Text>
              </View>
            ))}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.medsRow}>
            {todayMeditations.map((med) => (
              <TouchableOpacity
                key={med.id}
                style={styles.medCard}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('MeditationPlayer', {
                  id: med.id, title: med.title, author: med.author, image: med.image, duration: med.duration, rating: med.rating,
                })}
              >
                <Image source={{ uri: med.image }} style={styles.medImage} />
                <Text style={styles.medTitle} numberOfLines={2}>{med.title}</Text>
                <Text style={styles.medAuthor}>{med.author}</Text>
                <View style={styles.medMeta}>
                  <Text style={styles.medRating}>{med.rating}</Text>
                  <Text> ⭐ </Text>
                  <Text style={styles.medDuration}>{med.duration}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
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
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: 2, backgroundColor: colors.textPrimary, borderRadius: 1,
  },
  targetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    marginHorizontal: 20,
    borderRadius: 14,
    padding: 16,
    marginBottom: 28,
    gap: 14,
  },
  targetIcon: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  targetText: { flex: 1 },
  targetLabel: { fontSize: 14, fontWeight: '600', color: colors.textPrimary, marginBottom: 2 },
  targetProgress: { fontSize: 13, color: colors.textSecondary },
  favCard: { width: 160, marginRight: 14 },
  favImage: { width: 160, height: 160, borderRadius: 12, backgroundColor: colors.backgroundCard, marginBottom: 10 },
  favImageRound: { borderRadius: 80 },
  favTitle: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginBottom: 4 },
  favAuthor: { fontSize: 12, color: colors.textSecondary },
  topRatedSection: { marginBottom: 32 },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, marginBottom: 16,
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  seeAll: { fontSize: 14, color: colors.textAction },
  topRatedGrid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 20, gap: 12,
  },
  topRatedItem: {
    width: '47%', flexDirection: 'row', alignItems: 'center', gap: 10,
  },
  topRatedThumb: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.backgroundCard },
  topRatedMeta: { flex: 1 },
  topRatedTitle: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginBottom: 2 },
  topRatedAuthor: { fontSize: 12, color: colors.textSecondary, marginBottom: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 12, color: colors.textMuted },
  todaySection: { marginBottom: 0 },
  todaySectionTitle: { paddingHorizontal: 20, marginBottom: 16, fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  durationFilters: { paddingHorizontal: 20, marginBottom: 16, gap: 8 },
  durationPill: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: colors.backgroundCard,
    borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: colors.border,
  },
  durationText: { fontSize: 11, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '500' },
  medsRow: { paddingHorizontal: 20 },
  medCard: { width: 150, marginRight: 14 },
  medImage: { width: 150, height: 150, borderRadius: 12, backgroundColor: colors.backgroundCard, marginBottom: 8 },
  medTitle: { fontSize: 13, fontWeight: '600', color: colors.textPrimary, marginBottom: 4 },
  medAuthor: { fontSize: 12, color: colors.textSecondary, marginBottom: 4 },
  medMeta: { flexDirection: 'row', alignItems: 'center' },
  medRating: { fontSize: 12, color: colors.textMuted },
  medDuration: { fontSize: 12, color: colors.textMuted },
});
