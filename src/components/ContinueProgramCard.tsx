import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const { width } = Dimensions.get('window');

interface ContinueProgramCardProps {
  title: string;
  programName: string;
  author: string;
  image: string;
  duration: string;
  completedLessons: number;
  totalLessons: number;
  onPress?: () => void;
  onPlayPress?: () => void;
  onListPress?: () => void;
}

export default function ContinueProgramCard({
  title,
  programName,
  image,
  duration,
  completedLessons,
  totalLessons,
  onPress,
  onPlayPress,
  onListPress,
}: ContinueProgramCardProps) {
  const progress = totalLessons > 0 ? completedLessons / totalLessons : 0;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.lessonTitle}>{title}</Text>
        </View>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
        <View style={styles.mindvalleyLogo}>
          <Ionicons name="chevron-down" size={16} color="#fff" />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.programName}>{programName}</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={onPlayPress}>
              <Ionicons name="play-circle" size={32} color={colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onListPress}>
              <Ionicons name="list" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>

        <Text style={styles.progressText}>
          {completedLessons} of {totalLessons} completed
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    marginRight: 16,
  },
  imageContainer: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.backgroundCard,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  lessonTitle: {
    ...typography.h3,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  durationBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
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
    bottom: 12,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  content: {
    paddingTop: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  programName: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '700',
    letterSpacing: 0.5,
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 8,
  },
  progressContainer: {
    marginBottom: 6,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  progressText: {
    ...typography.caption,
    color: colors.textMuted,
  },
});
