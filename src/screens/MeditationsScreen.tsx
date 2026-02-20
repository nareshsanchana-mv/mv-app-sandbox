import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Section from '../components/Section';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import {
  topRatedMeditations,
  todayMeditations,
  meditationCategories,
  soundCategories,
} from '../data/mockData';
import type { RootStackParamList } from '../navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const tabs = ['All', 'Meditations', 'Sounds', 'Sound Healing', 'Hypnosis'];

export default function MeditationsScreen() {
  const [activeTab, setActiveTab] = useState('All');
  const navigation = useNavigation<NavigationProp>();

  const navigateToMeditation = (id: string, title: string, author: string, image: string, duration: string, rating?: number) => {
    navigation.navigate('MeditationPlayer', {
      id,
      title,
      author,
      image,
      duration,
      rating,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />

      {/* Tab Bar */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabBar}
        contentContainerStyle={styles.tabBarContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTabText]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Set Meditation Target */}
        <TouchableOpacity style={styles.targetCard}>
          <View style={styles.targetIcon}>
            <Ionicons name="radio-button-on-outline" size={24} color={colors.primary} />
          </View>
          <View style={styles.targetText}>
            <Text style={styles.targetTitle}>Set a Meditation Target</Text>
            <Text style={styles.targetSubtitle}>Track your meditation practice</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
        </TouchableOpacity>

        {/* Upgrade Banner */}
        <View style={styles.upgradeBanner}>
          <Text style={styles.upgradeText}>
            Level up your growth with{'\n'}Mindvalley Membership + Meditations
          </Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>Upgrade now</Text>
          </TouchableOpacity>
        </View>

        {/* Favorites */}
        <Section title="Favorites">
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Ionicons name="bookmark-outline" size={24} color={colors.textMuted} />
            </View>
            <View style={styles.emptyText}>
              <Text style={styles.emptyTitle}>Nothing to show here yet!</Text>
              <Text style={styles.emptySubtitle}>
                Start exploring our content and save your favorites for later.
              </Text>
            </View>
          </View>
        </Section>

        {/* Top Rated */}
        <Section title="Top rated" showSeeAll>
          <View style={styles.topRatedGrid}>
            {topRatedMeditations.map((med) => (
              <TouchableOpacity
                key={med.id}
                style={styles.topRatedItem}
                onPress={() => navigateToMeditation(
                  med.id,
                  med.title,
                  med.author,
                  med.image,
                  med.duration,
                  med.rating
                )}
                activeOpacity={0.8}
              >
                <View style={styles.topRatedImageContainer}>
                  <Image
                    source={{ uri: med.image }}
                    style={styles.topRatedImage}
                  />
                  {med.isLocked && (
                    <View style={styles.lockOverlay}>
                      <Ionicons name="lock-closed" size={14} color="#fff" />
                    </View>
                  )}
                </View>
                <View style={styles.topRatedInfo}>
                  <Text style={styles.topRatedTitle} numberOfLines={2}>
                    {med.title}
                  </Text>
                  <Text style={styles.topRatedAuthor}>{med.author}</Text>
                  <View style={styles.topRatedMeta}>
                    <Text style={styles.topRatedRating}>{med.rating}</Text>
                    <Ionicons name="star" size={12} color="#FFB800" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Section>

        {/* Your meditations for today */}
        <Section title="Your meditations for today">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {todayMeditations.map((med) => (
              <TouchableOpacity
                key={med.id}
                style={styles.meditationCard}
                onPress={() => navigateToMeditation(
                  med.id,
                  med.title,
                  med.author,
                  med.image,
                  med.duration,
                  med.rating
                )}
                activeOpacity={0.8}
              >
                <View style={styles.meditationCategory}>
                  <Ionicons name="time-outline" size={12} color={colors.textMuted} />
                  <Text style={styles.meditationCategoryText}>{med.category}</Text>
                </View>
                <Image source={{ uri: med.image }} style={styles.meditationImage} />
                <Text style={styles.meditationTitle} numberOfLines={2}>
                  {med.title}
                </Text>
                <Text style={styles.meditationAuthor}>{med.author}</Text>
                <View style={styles.meditationMeta}>
                  <Text style={styles.meditationRating}>{med.rating}</Text>
                  <Ionicons name="star" size={12} color="#FFB800" />
                  <Text style={styles.meditationDuration}> · {med.duration}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Section>

        {/* Meditation Categories */}
        <Section title="Meditation categories" showSeeAll>
          <View style={styles.categoriesRow}>
            {meditationCategories.slice(0, 2).map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                <View style={styles.categoryGradient} />
                <Text style={styles.categoryName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Section>

        {/* Sound Categories */}
        <Section title="Sound categories" showSeeAll>
          <View style={styles.categoriesRow}>
            {soundCategories.slice(0, 2).map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.categoryCard}>
                <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                <View style={styles.categoryGradient} />
                <Text style={styles.categoryName}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Section>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    maxHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tabBarContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 4,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.textPrimary,
  },
  tabText: {
    ...typography.label,
    color: colors.textMuted,
  },
  activeTabText: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  targetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
  },
  targetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  targetText: {
    flex: 1,
  },
  targetTitle: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  targetSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  upgradeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  upgradeText: {
    ...typography.bodySmall,
    color: '#fff',
    flex: 1,
    marginRight: 12,
  },
  upgradeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  upgradeButtonText: {
    ...typography.label,
    color: colors.primary,
    fontWeight: '600',
  },
  emptyState: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
  },
  emptyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emptyText: {
    flex: 1,
  },
  emptyTitle: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 4,
  },
  emptySubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  topRatedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topRatedItem: {
    width: '48%',
    flexDirection: 'row',
    marginBottom: 16,
  },
  topRatedImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 10,
  },
  topRatedImage: {
    width: '100%',
    height: '100%',
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRatedInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  topRatedTitle: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 2,
  },
  topRatedAuthor: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  topRatedMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRatedRating: {
    ...typography.caption,
    color: colors.textMuted,
    marginRight: 2,
  },
  meditationCard: {
    width: 160,
    marginRight: 12,
  },
  meditationCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  meditationCategoryText: {
    ...typography.caption,
    color: colors.textMuted,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  meditationImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 10,
  },
  meditationTitle: {
    ...typography.label,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  meditationAuthor: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  meditationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meditationRating: {
    ...typography.caption,
    color: colors.textMuted,
    marginRight: 2,
  },
  meditationDuration: {
    ...typography.caption,
    color: colors.textMuted,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  categoryName: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    ...typography.label,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  bottomPadding: {
    height: 100,
  },
});
