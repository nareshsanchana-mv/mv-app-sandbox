import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { useUser } from '../context/UserContext';
import { user } from '../data/mockData';

interface HeaderProps {
  showProfile?: boolean;
  showEveAI?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserToggle?: boolean;
}

export default function Header({
  showProfile = true,
  showEveAI = true,
  showSearch = true,
  showNotifications = true,
  showUserToggle = true,
}: HeaderProps) {
  const { userTier, setUserTier, isSubscriber } = useUser();
  const navigation = useNavigation();

  const toggleUserTier = () => {
    setUserTier(userTier === 'L1' ? 'L3L4' : 'L1');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile' as never);
  };

  return (
    <View style={styles.container}>
      {showProfile && (
        <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
          {user.avatar ? (
            <Image source={{ uri: user.avatar }} style={styles.profileImage} />
          ) : (
            <View style={styles.profilePlaceholder}>
              <Ionicons name="person" size={20} color={colors.textMuted} />
            </View>
          )}
        </TouchableOpacity>
      )}

      <View style={styles.spacer} />

      {/* User Tier Toggle */}
      {showUserToggle && (
        <TouchableOpacity style={styles.tierToggle} onPress={toggleUserTier}>
          <View style={[styles.tierIndicator, isSubscriber && styles.tierIndicatorActive]}>
            <Ionicons
              name={isSubscriber ? 'diamond' : 'diamond-outline'}
              size={14}
              color={isSubscriber ? '#fff' : colors.textMuted}
            />
          </View>
          <Text style={[styles.tierText, isSubscriber && styles.tierTextActive]}>
            {isSubscriber ? 'L3/L4' : 'L1'}
          </Text>
        </TouchableOpacity>
      )}

      {showEveAI && !isSubscriber && (
        <TouchableOpacity style={styles.eveAIButton}>
          <View style={styles.eveIcon}>
            <Ionicons name="cube-outline" size={16} color={colors.primary} />
          </View>
          <Text style={styles.eveAIText}>Eve AI</Text>
        </TouchableOpacity>
      )}

      {showSearch && (
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      )}

      {showNotifications && (
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    flex: 1,
  },
  tierToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  tierIndicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  tierIndicatorActive: {
    backgroundColor: colors.primary,
  },
  tierText: {
    ...typography.labelSmall,
    color: colors.textMuted,
    fontWeight: '600',
  },
  tierTextActive: {
    color: colors.primary,
  },
  eveAIButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F0FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  eveIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E8E3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  eveAIText: {
    ...typography.labelSmall,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
