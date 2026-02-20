import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface FavoriteCardProps {
  title: string;
  author: string;
  image: string;
  onPress?: () => void;
}

export default function FavoriteCard({
  title,
  author,
  image,
  onPress,
}: FavoriteCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.author} numberOfLines={1}>{author}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginRight: 16,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: colors.backgroundCard,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  author: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
