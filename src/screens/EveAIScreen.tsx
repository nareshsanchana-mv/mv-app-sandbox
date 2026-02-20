import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { user, evePrompts } from '../data/mockData';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

export default function EveAIScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    // Simulate Eve typing
    setTimeout(() => {
      const typingMessage: Message = {
        id: 'typing',
        text: '',
        isUser: false,
        isTyping: true,
      };
      setMessages((prev) => [...prev, typingMessage]);

      // Simulate Eve response
      setTimeout(() => {
        const eveResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `That's a great goal! Let me find some content that can help you with "${text.trim()}". I have several programs and meditations that might be perfect for you.`,
          isUser: false,
        };
        setMessages((prev) => prev.filter((m) => m.id !== 'typing').concat(eveResponse));
      }, 2000);
    }, 500);
  };

  const handlePromptPress = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="menu" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <View style={styles.headerSpacer} />
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="eye-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="close" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.length === 0 ? (
            // Initial State
            <View style={styles.initialState}>
              {/* Eve Logo */}
              <View style={styles.eveLogo}>
                <Ionicons name="cube-outline" size={40} color={colors.primary} />
              </View>

              {/* Greeting */}
              <Text style={styles.greeting}>Hi, {user.name}</Text>
              <Text style={styles.subtitle}>How can I help you today?</Text>

              <View style={styles.promptsSection}>
                <Text style={styles.promptsTitle}>Prompts to get you started</Text>
                <View style={styles.promptsGrid}>
                  {evePrompts.map((prompt, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.promptCard}
                      onPress={() => handlePromptPress(prompt)}
                    >
                      <Text style={styles.promptText}>{prompt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ) : (
            // Chat Messages
            <View style={styles.messagesContainer}>
              {messages.map((message) => (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    message.isUser ? styles.userBubble : styles.eveBubble,
                  ]}
                >
                  {!message.isUser && (
                    <View style={styles.eveAvatar}>
                      <Ionicons name="cube-outline" size={16} color={colors.primary} />
                    </View>
                  )}
                  <View
                    style={[
                      styles.messageContent,
                      message.isUser ? styles.userContent : styles.eveContent,
                    ]}
                  >
                    {message.isTyping ? (
                      <View style={styles.typingIndicator}>
                        <View style={styles.typingDot} />
                        <View style={[styles.typingDot, styles.typingDotMiddle]} />
                        <View style={styles.typingDot} />
                      </View>
                    ) : (
                      <Text
                        style={[
                          styles.messageText,
                          message.isUser ? styles.userMessageText : styles.eveMessageText,
                        ]}
                      >
                        {message.text}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Ask Eve AI..."
              placeholderTextColor={colors.textMuted}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={() => handleSendMessage(inputText)}
              returnKeyType="send"
            />
            <TouchableOpacity style={styles.micButton}>
              <Ionicons name="mic-outline" size={22} color={colors.textMuted} />
            </TouchableOpacity>
          </View>

          {/* Disclaimer */}
          <Text style={styles.disclaimer}>
            EVE AI provides general information only. It is not medical, financial,
            therapeutic, or professional advice, and may not reflect Mindvalley's
            views or always be accurate.
          </Text>
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSpacer: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  initialState: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  eveLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: 60,
  },
  promptsSection: {
    width: '100%',
  },
  promptsTitle: {
    ...typography.label,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  promptsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  promptCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  promptText: {
    ...typography.bodySmall,
    color: colors.textPrimary,
    lineHeight: 20,
  },
  messagesContainer: {
    padding: 16,
  },
  messageBubble: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '85%',
  },
  userBubble: {
    alignSelf: 'flex-end',
  },
  eveBubble: {
    alignSelf: 'flex-start',
  },
  eveAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 4,
  },
  messageContent: {
    borderRadius: 16,
    padding: 12,
    maxWidth: '100%',
  },
  userContent: {
    backgroundColor: '#E8E3FF',
    borderTopRightRadius: 4,
  },
  eveContent: {
    backgroundColor: 'transparent',
    paddingLeft: 0,
  },
  messageText: {
    ...typography.body,
    lineHeight: 22,
  },
  userMessageText: {
    color: colors.textPrimary,
  },
  eveMessageText: {
    color: colors.textPrimary,
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textMuted,
    marginHorizontal: 2,
    opacity: 0.6,
  },
  typingDotMiddle: {
    opacity: 0.8,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.textPrimary,
    paddingVertical: 12,
  },
  micButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
  },
});
