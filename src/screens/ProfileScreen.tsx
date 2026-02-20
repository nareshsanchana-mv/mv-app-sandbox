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
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { user, achievements, growthGoals } from '../data/mockData';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    navigation.navigate('Settings' as never);
  };

  const meditatedHours = Math.floor(user.meditatedMinutes / 60);
  const meditatedMins = user.meditatedMinutes % 60;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
        <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* User Profile */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: user.avatar || 'https://via.placeholder.com/120' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.fullName}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil-outline" size={20} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Progress</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Day Streak */}
          <View style={styles.streakCard}>
            <View style={styles.streakIcon}>
              <Ionicons name="diamond-outline" size={28} color={colors.textMuted} />
            </View>
            <Text style={styles.streakNumber}>{user.dayStreak}</Text>
            <Text style={styles.streakLabel}>DAY STREAK</Text>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Ionicons name="play-circle" size={32} color="#007AFF" />
              <Text style={styles.statNumber}>{user.lessonsCompleted}</Text>
              <Text style={styles.statLabel}>LESSONS{'\n'}COMPLETED</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="time-outline" size={32} color="#34C759" />
              <Text style={styles.statNumber}>{meditatedHours}h {meditatedMins}m</Text>
              <Text style={styles.statLabel}>MEDITATED</Text>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementItem}>
                <View style={styles.achievementBadge}>
                  <Image
                    source={{ uri: achievement.image }}
                    style={styles.achievementImage}
                  />
                </View>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDate}>{achievement.date}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Library */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Library</Text>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="book-outline" size={24} color={colors.textPrimary} />
            <Text style={styles.listItemText}>Continue programs</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="bookmark-outline" size={24} color={colors.textPrimary} />
            <Text style={styles.listItemText}>Favorites</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color={colors.textPrimary} />
            <Text style={styles.listItemText}>Completed</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="download-outline" size={24} color={colors.textPrimary} />
            <Text style={styles.listItemText}>Downloads</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Growth Goals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Growth Goals</Text>
            <TouchableOpacity>
              <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalsContainer}>
            {growthGoals.map((goal) => (
              <View
                key={goal.id}
                style={[styles.goalPill, { backgroundColor: goal.color }]}
              >
                <Text style={styles.goalText}>{goal.title}</Text>
              </View>
            ))}
          </View>
        </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    ...typography.h3,
    color: colors.textPrimary,
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.backgroundCard,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 16,
  },
  userName: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    ...typography.body,
    color: colors.textSecondary,
  },
  profileActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  viewProfileButton: {
    backgroundColor: colors.surface,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginRight: 12,
  },
  viewProfileText: {
    ...typography.label,
    color: colors.textPrimary,
  },
  editButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.textPrimary,
  },
  seeAllText: {
    ...typography.label,
    color: colors.textMuted,
  },
  updateText: {
    ...typography.label,
    color: colors.primary,
  },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  streakIcon: {
    marginRight: 16,
  },
  streakNumber: {
    ...typography.h2,
    color: colors.textPrimary,
    marginRight: 12,
  },
  streakLabel: {
    ...typography.caption,
    color: colors.textMuted,
    letterSpacing: 1,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    ...typography.h2,
    color: colors.textPrimary,
    marginTop: 12,
    marginBottom: 8,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  achievementItem: {
    width: '47%',
    alignItems: 'center',
  },
  achievementBadge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.textPrimary,
    marginBottom: 12,
  },
  achievementImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  achievementTitle: {
    ...typography.label,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDate: {
    ...typography.caption,
    color: colors.textMuted,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listItemText: {
    ...typography.body,
    color: colors.textPrimary,
    flex: 1,
    marginLeft: 16,
  },
  goalsContainer: {
    gap: 12,
  },
  goalPill: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.textPrimary,
  },
  goalText: {
    ...typography.label,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  bottomPadding: {
    height: 40,
  },
});
