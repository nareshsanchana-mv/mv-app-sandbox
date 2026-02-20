import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const { width } = Dimensions.get('window');

export interface ProgramCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  userCount?: number;
  lessonCount?: number;
  rating?: number;
  duration?: string;
  type?: 'lesson' | 'meditation' | 'program';
  isLocked?: boolean;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
}

export default function ProgramCard({
  title,
  author,
  image,
  userCount,
  lessonCount,
  rating,
  duration,
  type = 'program',
  isLocked = false,
  size = 'medium',
  onPress,
}: ProgramCardProps) {
  const cardWidth = size === 'small' ? 150 : size === 'medium' ? 200 : width - 80;
  const imageHeight = size === 'small' ? 100 : size === 'medium' ? 140 : 200;

  const getTypeLabel = () => {
    switch (type) {
      case 'lesson':
        return 'LESSON';
      case 'meditation':
        return 'MEDITATION';
      default:
        return 'PROGRAM';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'lesson':
        return 'play-circle-outline';
      case 'meditation':
        return 'leaf-outline';
      default:
        return 'play-circle-outline';
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, { width: cardWidth }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.imageContainer, { height: imageHeight }]}>
        <Image source={{ uri: image }} style={styles.image} />

        {type && (
          <View style={styles.typeBadge}>
            <Ionicons name={getTypeIcon()} size={12} color={colors.textMuted} />
            <Text style={styles.typeText}>{getTypeLabel()}</Text>
          </View>
        )}

        {isLocked && (
          <View style={styles.lockBadge}>
            <Ionicons name="lock-closed" size={14} color="#fff" />
          </View>
        )}

        {duration && (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        )}

        <View style={styles.mindvalleyLogo}>
          <Ionicons name="chevron-down" size={16} color="#fff" />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {author}
        </Text>

        <View style={styles.meta}>
          {userCount !== undefined && (
            <View style={styles.metaItem}>
              <Ionicons name="people-outline" size={14} color={colors.textMuted} />
              <Text style={styles.metaText}>
                {userCount >= 1000 ? `${(userCount / 1000).toFixed(0)}K` : userCount}
              </Text>
            </View>
          )}

          {lessonCount !== undefined && (
            <Text style={styles.metaText}> · {lessonCount} lessons</Text>
          )}

          {rating !== undefined && (
            <View style={styles.metaItem}>
              <Text style={styles.ratingText}>{rating}</Text>
              <Ionicons name="star" size={12} color="#FFB800" />
            </View>
          )}

          {duration && !userCount && (
            <Text style={styles.metaText}> · {duration}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.backgroundCard,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  typeBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    ...typography.caption,
    color: colors.textMuted,
    fontWeight: '600',
    marginLeft: 4,
  },
  lockBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  durationText: {
    ...typography.caption,
    color: '#fff',
    fontWeight: '500',
  },
  mindvalleyLogo: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  content: {
    paddingTop: 10,
  },
  title: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 4,
  },
  author: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    ...typography.caption,
    color: colors.textMuted,
    marginLeft: 4,
  },
  ratingText: {
    ...typography.caption,
    color: colors.textMuted,
    marginRight: 2,
  },
});
