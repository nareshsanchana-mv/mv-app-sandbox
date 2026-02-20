import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import {
  questsData,
  currentLessonMeditation,
  lessonTasks,
  QuestLesson,
  QuestWeek,
} from '../data/mockData';
import type { RootStackParamList } from '../navigation/RootNavigator';

const { width } = Dimensions.get('window');

type QuestDetailRouteProp = RouteProp<RootStackParamList, 'QuestDetail'>;

export default function QuestDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<QuestDetailRouteProp>();
  const { questId, questTitle } = route.params;

  const [activeTab, setActiveTab] = useState<'lesson' | 'discussions'>('lesson');
  const [showTOC, setShowTOC] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get quest data
  const quest = questsData[questId] || questsData['silva-ultramind'];

  // Find current lesson (first uncompleted)
  const currentLesson = quest.weeks
    .flatMap((week) => week.lessons)
    .find((lesson) => !lesson.isCompleted) || quest.weeks[0]?.lessons[0];

  const currentLessonIndex = quest.weeks
    .flatMap((week) => week.lessons)
    .findIndex((lesson) => lesson.id === currentLesson?.id);

  const renderTOCItem = ({ item }: { item: QuestWeek }) => (
    <View style={styles.tocWeek}>
      <Text style={styles.tocWeekTitle}>{item.title}</Text>
      {item.lessons.map((lesson) => (
        <TouchableOpacity
          key={lesson.id}
          style={styles.tocLessonItem}
          onPress={() => setShowTOC(false)}
        >
          <Image source={{ uri: lesson.image }} style={styles.tocLessonImage} />
          <View style={styles.tocLessonContent}>
            <Text style={styles.tocLessonLabel}>Lesson {lesson.lessonNumber}</Text>
            <Text style={styles.tocLessonTitle} numberOfLines={2}>
              {lesson.title}
            </Text>
            <Text style={styles.tocLessonAuthor}>{lesson.author}</Text>
            <Text style={styles.tocLessonDuration}>{lesson.duration}</Text>
          </View>
          {lesson.isCompleted && (
            <Ionicons name="checkmark-circle" size={24} color={colors.success} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {quest.title}
        </Text>
        <TouchableOpacity
          style={styles.tocButton}
          onPress={() => setShowTOC(true)}
        >
          <Ionicons name="list" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Video Player Section */}
        <TouchableOpacity
          style={styles.videoContainer}
          onPress={() => setIsPlaying(!isPlaying)}
          activeOpacity={0.9}
        >
          <Image source={{ uri: quest.image }} style={styles.videoImage} />
          <View style={styles.videoOverlay}>
            {currentLesson && (
              <Text style={styles.videoTitle}>{currentLesson.title.split(' ').slice(0, 3).join('\n')}</Text>
            )}
          </View>

          {/* Video Controls */}
          {isPlaying ? (
            <View style={styles.videoControls}>
              <View style={styles.topControls}>
                <View style={styles.mediaToggle}>
                  <TouchableOpacity style={styles.mediaButton}>
                    <Ionicons name="videocam" size={18} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mediaButton}>
                    <Ionicons name="headset" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.rightControls}>
                  <TouchableOpacity style={styles.controlIcon}>
                    <Ionicons name="tv-outline" size={18} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.controlIcon}>
                    <Ionicons name="bookmark-outline" size={18} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.controlIcon}>
                    <Text style={styles.ccText}>CC</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.playbackControls}>
                <TouchableOpacity style={styles.seekButton}>
                  <Ionicons name="play-back" size={24} color="#fff" />
                  <Text style={styles.seekText}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                  <Ionicons name="play" size={36} color={colors.textPrimary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.seekButton}>
                  <Ionicons name="play-forward" size={24} color="#fff" />
                  <Text style={styles.seekText}>15</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottomControls}>
                <Text style={styles.timeText}>0:12</Text>
                <View style={styles.progressBar}>
                  <View style={styles.progressFill} />
                  <View style={styles.progressDot} />
                </View>
                <Text style={styles.timeText}>7:18</Text>
                <TouchableOpacity style={styles.speedButton}>
                  <Text style={styles.speedText}>1x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fullscreenButton}>
                  <Ionicons name="expand" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.playOverlay}>
              <TouchableOpacity style={styles.bigPlayButton}>
                <Ionicons name="play" size={32} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.durationBadge}>{currentLesson?.duration || '27m'}</Text>
            </View>
          )}

          <View style={styles.mindvalleyLogo}>
            <Ionicons name="chevron-down" size={16} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* Lesson Info */}
        <View style={styles.lessonInfo}>
          <View style={styles.lessonHeader}>
            <View style={styles.lessonTitleSection}>
              <Text style={styles.lessonLabel}>LESSON {currentLessonIndex + 1}</Text>
              <Text style={styles.lessonTitle}>{currentLesson?.title}</Text>
              <Text style={styles.lessonAuthor}>{quest.author}</Text>
              <Text style={styles.lessonDuration}>{currentLesson?.duration}</Text>
            </View>
            <View style={styles.lessonActions}>
              <TouchableOpacity style={styles.actionIcon}>
                <Ionicons name="download-outline" size={24} color={colors.textPrimary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionIcon}>
                <Ionicons name="bookmark-outline" size={24} color={colors.textPrimary} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'lesson' && styles.activeTab]}
              onPress={() => setActiveTab('lesson')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'lesson' && styles.activeTabText,
                ]}
              >
                Lesson
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'discussions' && styles.activeTab]}
              onPress={() => setActiveTab('discussions')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'discussions' && styles.activeTabText,
                ]}
              >
                Discussions
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'lesson' ? (
            <>
              {/* Meditation Card */}
              <View style={styles.meditationCard}>
                <View style={styles.meditationHeader}>
                  <Ionicons name="leaf-outline" size={14} color={colors.textMuted} />
                  <Text style={styles.meditationType}>
                    {currentLessonMeditation.type} · {currentLessonMeditation.duration}
                  </Text>
                </View>
                <View style={styles.meditationContent}>
                  <Image
                    source={{ uri: currentLessonMeditation.image }}
                    style={styles.meditationImage}
                  />
                  <View style={styles.meditationInfo}>
                    <Text style={styles.meditationTitle}>
                      {currentLessonMeditation.title}
                    </Text>
                    <Text style={styles.meditationAuthor}>
                      {currentLessonMeditation.author}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.meditationPlayButton}>
                    <Ionicons name="play" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Description */}
              <Text style={styles.description}>{quest.description}</Text>

              {/* Tasks */}
              <View style={styles.tasksSection}>
                <Text style={styles.tasksTitle}>
                  0/{lessonTasks.length} Tasks Completed
                </Text>
                {lessonTasks.map((task) => (
                  <TouchableOpacity key={task.id} style={styles.taskItem}>
                    <View
                      style={[
                        styles.taskCheckbox,
                        task.isCompleted && styles.taskCheckboxCompleted,
                      ]}
                    >
                      {task.isCompleted && (
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      )}
                    </View>
                    <Text style={styles.taskText}>{task.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : (
            <View style={styles.discussionsPlaceholder}>
              <Text style={styles.discussionsText}>
                Discussions will appear here
              </Text>
            </View>
          )}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Complete Lesson Button */}
      <View style={styles.completeButtonContainer}>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>Complete lesson</Text>
        </TouchableOpacity>
      </View>

      {/* Table of Contents Modal */}
      <Modal
        visible={showTOC}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowTOC(false)}
      >
        <SafeAreaView style={styles.tocContainer}>
          <View style={styles.tocHeader}>
            <View style={styles.tocHandle} />
            <Text style={styles.tocTitle}>{quest.title}</Text>
          </View>
          <FlatList
            data={quest.weeks}
            keyExtractor={(item) => item.id}
            renderItem={renderTOCItem}
            contentContainerStyle={styles.tocList}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity
            style={styles.tocCloseButton}
            onPress={() => setShowTOC(false)}
          >
            <Text style={styles.tocCloseText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    flex: 1,
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
    textAlign: 'center',
  },
  tocButton: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  videoContainer: {
    width: width,
    height: 280,
    backgroundColor: '#000',
  },
  videoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  videoTitle: {
    ...typography.h2,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigPlayButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    ...typography.caption,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  videoControls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 16,
  },
  topControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediaToggle: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 4,
  },
  mediaButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  rightControls: {
    flexDirection: 'row',
  },
  controlIcon: {
    marginLeft: 16,
  },
  ccText: {
    ...typography.caption,
    color: '#fff',
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  playbackControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seekButton: {
    alignItems: 'center',
    marginHorizontal: 32,
  },
  seekText: {
    ...typography.caption,
    color: '#fff',
    marginTop: 2,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    ...typography.caption,
    color: '#fff',
    minWidth: 40,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressFill: {
    width: '10%',
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginLeft: -6,
  },
  speedButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  speedText: {
    ...typography.caption,
    color: '#fff',
    fontWeight: '600',
  },
  fullscreenButton: {
    marginLeft: 12,
  },
  mindvalleyLogo: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  lessonInfo: {
    padding: 16,
  },
  lessonHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  lessonTitleSection: {
    flex: 1,
  },
  lessonLabel: {
    ...typography.caption,
    color: colors.textMuted,
    letterSpacing: 1,
    marginBottom: 4,
  },
  lessonTitle: {
    ...typography.h3,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  lessonAuthor: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  lessonDuration: {
    ...typography.caption,
    color: colors.textMuted,
  },
  lessonActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginLeft: 16,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 32,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.textPrimary,
  },
  tabText: {
    ...typography.label,
    color: colors.textMuted,
  },
  activeTabText: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
  meditationCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  meditationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  meditationType: {
    ...typography.caption,
    color: colors.textMuted,
    marginLeft: 6,
    letterSpacing: 0.5,
  },
  meditationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meditationImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  meditationInfo: {
    flex: 1,
    marginLeft: 12,
  },
  meditationTitle: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 4,
  },
  meditationAuthor: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  meditationPlayButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 24,
  },
  tasksSection: {
    marginBottom: 20,
  },
  tasksTitle: {
    ...typography.h4,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  taskCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCheckboxCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  taskText: {
    ...typography.body,
    color: colors.textPrimary,
    flex: 1,
  },
  discussionsPlaceholder: {
    padding: 40,
    alignItems: 'center',
  },
  discussionsText: {
    ...typography.body,
    color: colors.textMuted,
  },
  bottomPadding: {
    height: 100,
  },
  completeButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  completeButton: {
    backgroundColor: colors.textPrimary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  completeButtonText: {
    ...typography.label,
    color: '#fff',
    fontWeight: '600',
  },
  // TOC Modal Styles
  tocContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tocHeader: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  tocHandle: {
    width: 40,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    marginBottom: 16,
  },
  tocTitle: {
    ...typography.h4,
    color: colors.textPrimary,
  },
  tocList: {
    padding: 16,
  },
  tocWeek: {
    marginBottom: 24,
  },
  tocWeekTitle: {
    ...typography.h4,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  tocLessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  tocLessonImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  tocLessonContent: {
    flex: 1,
  },
  tocLessonLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: 2,
  },
  tocLessonTitle: {
    ...typography.label,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 2,
  },
  tocLessonAuthor: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  tocLessonDuration: {
    ...typography.caption,
    color: colors.textMuted,
  },
  tocCloseButton: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  tocCloseText: {
    ...typography.label,
    color: colors.primary,
    fontWeight: '600',
  },
});
