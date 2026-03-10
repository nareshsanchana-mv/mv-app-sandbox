import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

interface ProgramCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  type?: string;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  progress?: number;
  lessonCount?: number;
  userCount?: number;
}

export default function ProgramCard({ title, author, image, size = 'medium', onPress, progress }: ProgramCardProps) {
  const width = size === 'large' ? 260 : size === 'medium' ? 180 : 140;
  const imageHeight = size === 'large' ? 160 : size === 'medium' ? 140 : 110;

  return (
    <TouchableOpacity style={[styles.card, { width }]} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: image }} style={[styles.image, { height: imageHeight }]} />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.author} numberOfLines={1}>{author}</Text>
      {progress !== undefined && (
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 14,
  },
  image: {
    width: '100%',
    borderRadius: 14,
    backgroundColor: colors.backgroundCard,
    marginBottom: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: '900',
    color: colors.textPrimary,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  progressTrack: {
    height: 3,
    backgroundColor: colors.progressTrack,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.magenta,
    borderRadius: 2,
  },
});
