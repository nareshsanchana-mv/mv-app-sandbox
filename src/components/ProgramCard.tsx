import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProgramCardProps {
  title: string;
  author: string;
  coverImage: ImageSourcePropType;
  enrolledCount: number;
  lessonCount: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, author, coverImage, enrolledCount, lessonCount }) => {
    const imageSource = typeof coverImage === 'string' ? { uri: coverImage } : coverImage;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.coverImage} />
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <View style={styles.metaRow}>
        <Ionicons name="people-outline" size={12} color="#999" />
        <Text style={styles.metaText}>{enrolledCount.toLocaleString()}</Text>
        <Text style={styles.metaSeparator}>·</Text>
        <Text style={styles.metaText}>{lessonCount} lessons</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    marginRight: 12,
  },
  coverImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    color: '#999',
    fontSize: 12,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    color: '#999',
    fontSize: 11,
    marginLeft: 4,
  },
  metaSeparator: {
    color: '#999',
    marginHorizontal: 4,
  },
});

export default ProgramCard;
