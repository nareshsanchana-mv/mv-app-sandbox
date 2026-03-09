import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

const TABS = ['Networks', 'Live', 'People'];

const MASTERY_NETWORKS = [
  {
    id: '1',
    title: 'AI MASTERY',
    subtitle: 'ADVANCED',
    desc: 'Mindvalley Book Club with Melinda Wenner Moyer',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
  },
];

const YOUR_NETWORKS = [
  { id: '1', image: 'https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=200' },
  { id: '2', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200' },
  { id: '3', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200' },
];

export default function CommunityScreen() {
  const [activeTab, setActiveTab] = useState('Networks');

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
        {/* Mastery Networks */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mastery networks</Text>
        </View>

        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
          {MASTERY_NETWORKS.map((network) => (
            <TouchableOpacity key={network.id} style={styles.masteryCard} activeOpacity={0.9}>
              <Image source={{ uri: network.image }} style={styles.masteryImage} />
              <View style={styles.masteryOverlay}>
                <Text style={styles.masteryTitle}>{network.title}</Text>
                <Text style={styles.masterySubtitle}>{network.subtitle}</Text>
              </View>
              <View style={styles.masteryFooter}>
                <Ionicons name="megaphone-outline" size={16} color={colors.textSecondary} />
                <Text style={styles.masteryDesc} numberOfLines={2}>{network.desc}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.pageDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        {/* Your Networks */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your networks</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.networksRow}>
          {YOUR_NETWORKS.map((n) => (
            <TouchableOpacity key={n.id} style={styles.networkCard} activeOpacity={0.85}>
              <Image source={{ uri: n.image }} style={styles.networkImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

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
  sectionHeader: { paddingHorizontal: 20, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  carousel: { paddingHorizontal: 20 },
  masteryCard: {
    width: 340,
    marginRight: 14,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: colors.backgroundCard,
  },
  masteryImage: { width: '100%', height: 320, backgroundColor: colors.backgroundCard },
  masteryOverlay: {
    position: 'absolute',
    bottom: 68,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: 'rgba(10,14,23,0.4)',
  },
  masteryTitle: { fontSize: 28, fontWeight: '900', color: colors.textPrimary, textTransform: 'uppercase' },
  masterySubtitle: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, textTransform: 'uppercase' },
  masteryFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.backgroundCommunity,
    paddingHorizontal: 20,
    paddingVertical: 14,
    minHeight: 60,
  },
  masteryDesc: { flex: 1, fontSize: 13, color: colors.textSecondary },
  pageDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 14,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.surface },
  dotActive: { backgroundColor: colors.textPrimary },
  networksRow: { paddingHorizontal: 20 },
  networkCard: { width: 120, height: 120, marginRight: 12, borderRadius: 14, overflow: 'hidden' },
  networkImage: { width: '100%', height: '100%', backgroundColor: colors.backgroundCard },
});
