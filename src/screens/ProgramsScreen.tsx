import React from 'react';
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
import Header from '../components/Header';
import Section from '../components/Section';
import ProgramCard from '../components/ProgramCard';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import {
  trendingPrograms,
  popularPrograms,
  categories,
} from '../data/mockData';

// Category programs by type
const categoryPrograms = {
  Soul: [
    {
      id: 's1',
      title: 'Ultra Presence',
      author: 'Juan Pablo Barahona',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
      userCount: 21565,
      lessonCount: 15,
    },
    {
      id: 's2',
      title: 'Higher Self',
      author: 'Ariya Lorenz',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600',
      userCount: 5250,
      lessonCount: 12,
    },
  ],
  Entrepreneurship: [
    {
      id: 'e1',
      title: 'Building an Unstoppable Brand',
      author: 'Jeffrey Perlman',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      userCount: 23448,
      lessonCount: 19,
    },
    {
      id: 'e2',
      title: 'The Transformational Leader',
      author: 'Monty Moran',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600',
      userCount: 14452,
      lessonCount: 16,
    },
  ],
};

export default function ProgramsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Language Selector */}
        <View style={styles.languageRow}>
          <Text style={styles.browseLabel}>Browse by language</Text>
          <TouchableOpacity style={styles.languageButton}>
            <Ionicons name="language" size={16} color={colors.textPrimary} />
            <Text style={styles.languageText}>English (EN)</Text>
          </TouchableOpacity>
        </View>

        {/* Trending Globally */}
        <Section
          title="Trending Globally"
          subtitle="Update your location to see the latest trending programs in your country."
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {trendingPrograms.map((program) => (
              <TouchableOpacity key={program.id} style={styles.trendingCard}>
                <Image
                  source={{ uri: program.image }}
                  style={styles.trendingImage}
                />
                <View style={styles.trendingInfo}>
                  <Text style={styles.trendingRank}>{program.rank}</Text>
                  <View style={styles.trendingText}>
                    <Text style={styles.trendingTitle} numberOfLines={2}>
                      {program.title}
                    </Text>
                    <Text style={styles.trendingAuthor}>{program.author}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Section>

        {/* Popular Now */}
        <Section
          title="Popular now"
          subtitle="Update your profile to get personalized program recommendations."
          horizontal
        >
          {popularPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
              type="program"
              size="large"
            />
          ))}
        </Section>

        {/* Browse by Categories */}
        <Section title="Browse by Categories">
          <View style={styles.categoriesGrid}>
            {categories.slice(0, 4).map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <Image
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                />
                <View style={[styles.categoryOverlay, { backgroundColor: `${category.color}80` }]} />
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Section>

        {/* Soul Category */}
        <Section
          title="Soul"
          icon="sunny-outline"
          iconColor="#F59E0B"
          showSeeAll
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryPrograms.Soul.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
                type="program"
                size="large"
              />
            ))}
          </ScrollView>
        </Section>

        {/* Entrepreneurship Category */}
        <Section
          title="Entrepreneurship"
          icon="rocket-outline"
          iconColor="#EF4444"
          showSeeAll
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categoryPrograms.Entrepreneurship.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
                type="program"
                size="large"
              />
            ))}
          </ScrollView>
        </Section>

        {/* Career Growth */}
        <Section
          title="Career Growth"
          icon="trending-up-outline"
          iconColor="#8B5CF6"
          showSeeAll
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                {...program}
                type="program"
                size="large"
              />
            ))}
          </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  browseLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginRight: 12,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  languageText: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    marginLeft: 6,
    fontWeight: '500',
  },
  trendingCard: {
    width: 180,
    marginRight: 12,
  },
  trendingImage: {
    width: 180,
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  trendingInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  trendingRank: {
    ...typography.h3,
    color: colors.textMuted,
    marginRight: 8,
    width: 20,
  },
  trendingText: {
    flex: 1,
  },
  trendingTitle: {
    ...typography.label,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  trendingAuthor: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  categoryName: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    ...typography.h4,
    color: '#fff',
    fontWeight: '700',
  },
  bottomPadding: {
    height: 100,
  },
});
