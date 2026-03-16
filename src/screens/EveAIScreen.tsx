import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
  KeyboardAvoidingView, Platform, Modal, FlatList, Image,
  Animated, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

// ─── Mock data ────────────────────────────────────────────────────────────

const SUGGESTIONS = [
  "I'm feeling stressed, tired, or seeking better sleep.",
  "I'm looking to lose weight and improve my fitness.",
  "I want to develop a growth mindset and increase my self-confidence.",
  "I want to enhance my leadership skills, build a strong team and inspire others.",
];

const PAST_CHATS = [
  'Relaxing Morning Sounds',
  'Relaxing Morning Sounds',
  'Relaxing Morning Music',
  'Relaxing morning sound recommendations',
  'Best sleep techniques for busy professionals',
  'Morning meditation for focus',
  'Building confidence at work',
  'Stress relief before presentations',
  'Sleep & Stress Relief',
  'Fitness and weight loss',
];

interface LessonCard {
  title: string;
  program: string;
  rating: number;
  duration: string;
  image: string;
}

interface ResponsePoint {
  text: string;
  card?: LessonCard;
}

interface EveResponse {
  title: string;
  intro: string;
  points: ResponsePoint[];
}

const EVE_RESPONSES: Record<string, EveResponse> = {
  sleep: {
    title: 'Sleep & Stress Relief',
    intro: 'Knowing that small, consistent efforts can lead to profound shifts in your well-being.',
    points: [
      {
        text: 'Understand why sleep is crucial for your overall health, energy, and emotional balance.',
        card: { title: 'The Benefits of Sleep', program: 'The Mastery of Sleep', rating: 4.7, duration: '4m', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80' },
      },
      {
        text: 'Learn a structured evening routine to prepare your mind and body for optimal sleep.',
        card: { title: 'The Evening Wind-Down Ritual', program: 'The Mastery of Sleep', rating: 4.8, duration: '6m', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      },
      {
        text: 'Practice this guided meditation to release the tension of the day and drift into restful sleep.',
        card: { title: 'Sleep Inducing Body Scan', program: 'Mindvalley Meditations', rating: 4.9, duration: '25m', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80' },
      },
    ],
  },
  fitness: {
    title: 'Fitness & Vitality',
    intro: 'Building a healthy body is one of the greatest investments you can make in yourself.',
    points: [
      {
        text: 'Start with understanding the science behind effective fat loss and muscle building.',
        card: { title: 'The Science of Getting Strong', program: '10X Fitness', rating: 4.8, duration: '12m', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80' },
      },
      {
        text: 'Use this proven 20-minute bodyweight workout that fits any schedule.',
        card: { title: 'The 20-Minute Power Workout', program: '10X Fitness', rating: 4.7, duration: '20m', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
      },
    ],
  },
  mindset: {
    title: 'Growth Mindset',
    intro: "Your mindset shapes every outcome in your life — let's build one that serves you.",
    points: [
      {
        text: 'Discover the core beliefs that separate high performers from the rest.',
        card: { title: 'The Psychology of Peak Performance', program: 'Be Extraordinary', rating: 4.9, duration: '15m', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80' },
      },
      {
        text: 'Use this powerful reframing technique to turn self-doubt into momentum.',
        card: { title: 'Rewriting Your Story', program: 'Be Extraordinary', rating: 4.8, duration: '8m', image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&q=80' },
      },
    ],
  },
  leadership: {
    title: 'Leadership & Teams',
    intro: 'Great leaders are made, not born — and the skills are learnable at any stage.',
    points: [
      {
        text: 'Understand the five core qualities that inspire loyalty and high performance in teams.',
        card: { title: 'The Transformational Leader Framework', program: 'The Transformational Leader', rating: 4.7, duration: '18m', image: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?w=600&q=80' },
      },
      {
        text: 'Master the art of giving feedback that motivates rather than deflates.',
        card: { title: 'Feedback That Fuels Growth', program: 'The Transformational Leader', rating: 4.6, duration: '10m', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
      },
    ],
  },
  default: {
    title: 'Eve Recommendations',
    intro: "Here's what Mindvalley has to help you on this journey.",
    points: [
      {
        text: 'Start your transformation with this foundational lesson on creating lasting change.',
        card: { title: 'The Anatomy of Transformation', program: 'Be Extraordinary', rating: 4.9, duration: '14m', image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=600&q=80' },
      },
      {
        text: 'Build a daily practice that compounds into extraordinary results over time.',
        card: { title: 'Designing Your Perfect Day', program: 'Be Extraordinary', rating: 4.8, duration: '9m', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
      },
    ],
  },
};

function getResponse(input: string): EveResponse {
  const lower = input.toLowerCase();
  if (lower.match(/sleep|stress|tired|rest|calm|relax/)) return EVE_RESPONSES.sleep;
  if (lower.match(/weight|fitness|body|exercise|workout|health/)) return EVE_RESPONSES.fitness;
  if (lower.match(/mindset|confidence|growth|self|believe/)) return EVE_RESPONSES.mindset;
  if (lower.match(/lead|team|inspire|manage|people/)) return EVE_RESPONSES.leadership;
  return EVE_RESPONSES.default;
}

// ─── Eve geometric icon ───────────────────────────────────────────────────

const EveIcon = ({ size = 64 }: { size?: number }) => (
  <View style={[eveIconStyles.container, { width: size, height: size }]}>
    {[0, 30, 60, 90, 120, 150].map(deg => (
      <View
        key={deg}
        style={[
          eveIconStyles.bar,
          { width: size * 0.06, height: size * 0.78, transform: [{ rotate: `${deg}deg` }] },
        ]}
      />
    ))}
    <View style={[eveIconStyles.center, { width: size * 0.22, height: size * 0.22, borderRadius: size * 0.11 }]} />
  </View>
);

const eveIconStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bar: {
    position: 'absolute',
    backgroundColor: '#7C5CFC',
    borderRadius: 3,
    opacity: 0.85,
  },
  center: {
    backgroundColor: '#9B7CFF',
    shadowColor: '#7C5CFC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
});

// ─── Waveform component ───────────────────────────────────────────────────

const Waveform = () => {
  const bars = [0.4, 0.7, 1.0, 0.6, 0.85, 0.5, 0.9, 0.65, 0.75, 0.45];
  const anims = useRef(bars.map(h => new Animated.Value(h))).current;

  useEffect(() => {
    const animations = anims.map((anim, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, { toValue: Math.random() * 0.6 + 0.4, duration: 300 + i * 60, useNativeDriver: false }),
          Animated.timing(anim, { toValue: bars[i], duration: 300 + i * 60, useNativeDriver: false }),
        ])
      )
    );
    Animated.parallel(animations).start();
    return () => animations.forEach(a => a.stop());
  }, []);

  return (
    <View style={waveStyles.container}>
      {anims.map((anim, i) => (
        <Animated.View
          key={i}
          style={[waveStyles.bar, { height: anim.interpolate({ inputRange: [0, 1], outputRange: [4, 24] }) }]}
        />
      ))}
    </View>
  );
};

const waveStyles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 3, paddingHorizontal: 8 },
  bar: { width: 3, backgroundColor: '#7C5CFC', borderRadius: 2 },
});

// ─── Main screen ──────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'eve';
  text?: string;
  response?: EveResponse;
}

export default function EveAIScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [conversationTitle, setConversationTitle] = useState('');
  const scrollRef = useRef<ScrollView>(null);
  const isChat = messages.length > 0;

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const response = getResponse(text);
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    const eveMsg: Message = { id: (Date.now() + 1).toString(), role: 'eve', response };
    setMessages(prev => [...prev, userMsg, eveMsg]);
    setConversationTitle(response.title);
    setInput('');
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setInput('How can I improve my sleep?');
  };

  const startNewChat = () => {
    setMessages([]);
    setConversationTitle('');
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowHistory(true)} style={styles.headerBtn}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{isChat ? conversationTitle : 'Eve AI'}</Text>
        <View style={styles.headerRight}>
          {isChat && (
            <TouchableOpacity style={styles.headerBtn}>
              <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          {!isChat && (
            <TouchableOpacity style={styles.headerBtn}>
              <Ionicons name="eye-outline" size={22} color="#fff" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.headerBtn} onPress={isChat ? startNewChat : undefined}>
            <Ionicons name="close" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {!isChat ? (
          // ── Idle state ──────────────────────────────────────────────────
          <ScrollView contentContainerStyle={styles.idleContent} showsVerticalScrollIndicator={false}>
            <View style={styles.eveIconWrap}>
              <EveIcon size={72} />
            </View>
            <Text style={styles.greeting}>Hi, Naresh</Text>
            <Text style={styles.subtitle}>How can I help you today?</Text>
            <View style={styles.suggestionsGrid}>
              {SUGGESTIONS.map((s, i) => (
                <TouchableOpacity key={i} style={styles.suggestionCard} activeOpacity={0.8} onPress={() => sendMessage(s)}>
                  <Text style={styles.suggestionText}>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        ) : (
          // ── Chat state ──────────────────────────────────────────────────
          <ScrollView
            ref={scrollRef}
            style={styles.chatScroll}
            contentContainerStyle={styles.chatContent}
            showsVerticalScrollIndicator={false}
          >
            {messages.map(msg => (
              <View key={msg.id}>
                {msg.role === 'user' ? (
                  <View style={styles.userBubble}>
                    <Text style={styles.userText}>{msg.text}</Text>
                  </View>
                ) : msg.response ? (
                  <View style={styles.eveBlock}>
                    {/* Intro */}
                    <Text style={styles.eveIntro}>{msg.response.intro}</Text>
                    {/* Points + cards */}
                    {msg.response.points.map((point, pi) => (
                      <View key={pi}>
                        <View style={styles.evePoint}>
                          <Text style={styles.eveSparkle}>✦</Text>
                          <Text style={styles.evePointText}>{point.text}</Text>
                        </View>
                        {point.card && (
                          <TouchableOpacity style={styles.lessonCard} activeOpacity={0.85}>
                            <View style={styles.lessonCardLabel}>
                              <Ionicons name="play-circle-outline" size={14} color={colors.textMuted} />
                              <Text style={styles.lessonCardLabelText}> LESSON</Text>
                            </View>
                            <Image source={{ uri: point.card.image }} style={styles.lessonCardImage} />
                            <Text style={styles.lessonCardTitle}>{point.card.title}</Text>
                            <Text style={styles.lessonCardProgram}>From "{point.card.program}"</Text>
                            <View style={styles.lessonCardMeta}>
                              <Ionicons name="star" size={12} color="#F5A623" />
                              <Text style={styles.lessonCardMetaText}> {point.card.rating} · {point.card.duration}</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
            <View style={{ height: 20 }} />
          </ScrollView>
        )}

        {/* Input area */}
        <View style={styles.inputArea}>
          {isRecording && (
            <View style={styles.recordingHint}>
              <Ionicons name="language-outline" size={13} color="#000" style={{ marginRight: 4 }} />
              <Text style={styles.recordingHintText}>English works best for voice accuracy</Text>
            </View>
          )}
          <View style={styles.inputBar}>
            {isRecording ? (
              <>
                <Text style={styles.listeningText}>Listening...</Text>
                <Waveform />
                <TouchableOpacity onPress={stopRecording} style={styles.stopBtn}>
                  <View style={styles.stopIcon} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Ask Eve AI..."
                  placeholderTextColor={colors.textMuted}
                  value={input}
                  onChangeText={setInput}
                  onSubmitEditing={() => sendMessage(input)}
                  returnKeyType="send"
                  multiline
                />
                {input.trim().length > 0 ? (
                  <TouchableOpacity onPress={() => sendMessage(input)} style={styles.sendBtn}>
                    <Ionicons name="arrow-up" size={18} color="#000" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setIsRecording(true)}>
                    <Ionicons name="mic-outline" size={22} color={colors.textSecondary} />
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
          <Text style={styles.disclaimer}>
            EVE AI provides general information only. It is not medical, financial, therapeutic, or professional advice, and may not reflect Mindvalley's views or always be accurate.
          </Text>
        </View>
      </KeyboardAvoidingView>

      {/* Chat history modal */}
      <Modal visible={showHistory} animationType="slide" onRequestClose={() => setShowHistory(false)}>
        <SafeAreaView style={styles.historyContainer} edges={['top']}>
          <View style={styles.historyHeader}>
            <TouchableOpacity onPress={() => setShowHistory(false)} style={styles.headerBtn}>
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerBtn}>
                <Ionicons name="create-outline" size={22} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn}>
                <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.historySection}>Past</Text>
          <FlatList
            data={PAST_CHATS}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.historyRow}
                onPress={() => setShowHistory(false)}
                activeOpacity={0.7}
              >
                <Text style={styles.historyRowText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  // Header
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 8, paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  headerBtn: { padding: 8 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 16, fontWeight: '700', color: '#fff' },
  headerRight: { flexDirection: 'row' },

  // Idle
  idleContent: { flexGrow: 1, alignItems: 'center', paddingHorizontal: 20, paddingTop: 48, paddingBottom: 24 },
  eveIconWrap: { marginBottom: 24 },
  greeting: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: colors.textSecondary, marginBottom: 48 },
  suggestionsGrid: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  suggestionCard: {
    width: '47%', backgroundColor: colors.backgroundCard, borderRadius: 14,
    padding: 16, borderWidth: 1, borderColor: colors.border,
  },
  suggestionText: { fontSize: 14, color: '#fff', lineHeight: 20 },

  // Chat
  chatScroll: { flex: 1 },
  chatContent: { paddingHorizontal: 16, paddingTop: 16 },
  userBubble: {
    alignSelf: 'flex-end', backgroundColor: '#7C5CFC',
    borderRadius: 18, borderBottomRightRadius: 4,
    paddingHorizontal: 16, paddingVertical: 12, marginBottom: 16,
    maxWidth: '80%',
  },
  userText: { fontSize: 15, color: '#fff', lineHeight: 21 },

  eveBlock: { marginBottom: 16 },
  eveIntro: { fontSize: 14, color: colors.textSecondary, lineHeight: 22, marginBottom: 16 },
  evePoint: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12, gap: 10 },
  eveSparkle: { fontSize: 14, color: '#7C5CFC', marginTop: 2 },
  evePointText: { flex: 1, fontSize: 15, color: '#fff', fontWeight: '500', lineHeight: 22 },

  // Lesson card
  lessonCard: {
    backgroundColor: colors.backgroundCard, borderRadius: 16,
    overflow: 'hidden', marginBottom: 20, borderWidth: 1, borderColor: colors.border,
  },
  lessonCardLabel: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 14, paddingTop: 12, paddingBottom: 8,
  },
  lessonCardLabelText: { fontSize: 11, fontWeight: '700', color: colors.textMuted, letterSpacing: 1 },
  lessonCardImage: { width: '100%', height: 180 },
  lessonCardTitle: { fontSize: 16, fontWeight: '700', color: '#fff', paddingHorizontal: 14, paddingTop: 10, marginBottom: 3 },
  lessonCardProgram: { fontSize: 13, color: colors.textSecondary, paddingHorizontal: 14, marginBottom: 6 },
  lessonCardMeta: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingBottom: 14 },
  lessonCardMetaText: { fontSize: 13, color: colors.textMuted },

  // Input
  inputArea: { paddingHorizontal: 16, paddingBottom: 12, paddingTop: 8 },
  recordingHint: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 8,
    alignSelf: 'center', marginBottom: 10,
  },
  recordingHintText: { fontSize: 13, color: '#000', fontWeight: '500' },
  inputBar: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: colors.backgroundElevated,
    borderRadius: 30, paddingHorizontal: 20, paddingVertical: 14, marginBottom: 10,
    minHeight: 54,
  },
  listeningText: { fontSize: 15, color: colors.textMuted, marginRight: 8 },
  stopBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  stopIcon: { width: 12, height: 12, backgroundColor: '#000', borderRadius: 2 },
  input: { flex: 1, color: '#fff', fontSize: 16, maxHeight: 100 },
  sendBtn: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  disclaimer: { fontSize: 11, color: colors.textMuted, textAlign: 'center', lineHeight: 16 },

  // History modal
  historyContainer: { flex: 1, backgroundColor: colors.background },
  historyHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 8, paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  historySection: {
    fontSize: 13, fontWeight: '700', color: colors.textMuted,
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10, letterSpacing: 0.5,
  },
  historyRow: { paddingHorizontal: 20, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: colors.border },
  historyRowText: { fontSize: 15, color: '#fff', fontWeight: '400' },
});
