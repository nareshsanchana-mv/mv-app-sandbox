import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

interface SectionProps {
  title: string;
  subtitle?: string;
  icon?: string;
  iconColor?: string;
  showSeeAll?: boolean;
  onSeeAllPress?: () => void;
  children: React.ReactNode;
  horizontal?: boolean;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

export default function Section({
  title,
  subtitle,
  icon,
  iconColor,
  showSeeAll = false,
  onSeeAllPress,
  children,
  horizontal = false,
  backgroundColor,
  paddingHorizontal = 16,
}: SectionProps) {
  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor } : null]}>
      <View style={[styles.header, { paddingHorizontal }]}>
        <View style={styles.titleContainer}>
          {icon && (
            <View style={[styles.iconContainer, { backgroundColor: iconColor ? `${iconColor}20` : '#F3F0FF' }]}>
              <Ionicons name={icon as any} size={14} color={iconColor || colors.primary} />
            </View>
          )}
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>

        {showSeeAll && (
          <TouchableOpacity onPress={onSeeAllPress} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        )}
      </View>

      {horizontal ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.horizontalContent, { paddingHorizontal }]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, { paddingHorizontal }]}>{children}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    ...typography.h4,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginTop: 2,
  },
  seeAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  seeAllText: {
    ...typography.label,
    color: colors.textMuted,
  },
  horizontalContent: {
    paddingRight: 16,
  },
  content: {},
});
