import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { userAvatar, userTier, setUserTier } = useUser();
  const isSubscriber = userTier === 'L3' || userTier === 'L3L4';
  const navigation = useNavigation();

  const cycleTier = () => {
    const next = { L1: 'L3' as const, L3: 'L3L4' as const, L3L4: 'L1' as const };
    setUserTier(next[userTier]);
  };

  const tierLabel = { L1: 'L1 Free User', L3: 'L3 Subscriber', L3L4: 'L3+L4 Subscriber' };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
        <Image
          source={{ uri: userAvatar }}
          style={styles.avatar}
        />
      </TouchableOpacity>

      {/* Tier Toggle */}
      <TouchableOpacity
        style={[styles.tierToggle, isSubscriber && styles.tierToggleSubscriber]}
        onPress={cycleTier}
      >
        <Text style={[styles.tierText, isSubscriber && styles.tierTextSubscriber]}>
          {tierLabel[userTier]}
        </Text>
        <Ionicons
          name="swap-horizontal"
          size={14}
          color={isSubscriber ? colors.primary : colors.textMuted}
        />
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="search" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.backgroundCard,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 16,
  },
  tierToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundCard,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  tierToggleSubscriber: {
    backgroundColor: 'rgba(124, 58, 237, 0.15)',
  },
  tierText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
  },
  tierTextSubscriber: {
    color: colors.primary,
  },
});
