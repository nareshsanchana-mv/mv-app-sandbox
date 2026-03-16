// Mock data for Mindvalley app

export const user = {
  name: 'Naresh',
  fullName: 'Naresh Sanchana',
  email: 'naresh.sanchana@mindvalley.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
  dayStreak: 0,
  lessonsCompleted: 30,
  meditatedMinutes: 415, // 6h 55m
};

export const achievements = [
  {
    id: '1',
    title: 'Balanced Mind',
    date: '10/11/2025',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200',
  },
  {
    id: '2',
    title: 'First Step',
    date: '08/12/2025',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200',
  },
  {
    id: '3',
    title: 'Tranquil Journey',
    date: '03/14/2025',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200',
  },
  {
    id: '4',
    title: 'Consistency Seed',
    date: '01/18/2025',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200',
  },
];

export const growthGoals = [
  { id: '1', title: 'Deeper Connection with Your Partner', color: '#FFE5F0' },
  { id: '2', title: 'Improving Quality of Life', color: '#E5F3FF' },
  { id: '3', title: 'Growing Your Income', color: '#FFE5D9' },
  { id: '4', title: 'Increasing Happiness', color: '#E5F3FF' },
  { id: '5', title: 'Build a Business', color: '#FFE5D9' },
  { id: '6', title: 'Better Sleep', color: '#E5FFE5' },
];

export const eveRecommendations = [
  {
    id: '1',
    type: 'lesson' as const,
    title: 'Rewire Your Belief Systems to Overcome Your Fears',
    author: 'The Science of Personal Branding',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 4.9,
    duration: '19m',
    reason: 'Boost confidence to launch your business by overcoming limiting beliefs.',
  },
  {
    id: '2',
    type: 'lesson' as const,
    title: 'Discover Your Ideal Client',
    author: 'The Science of Personal Branding',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    rating: 4.8,
    duration: '22m',
    reason: 'Focus your efforts on those who resonate with your soul-aligned business.',
  },
  {
    id: '3',
    type: 'meditation' as const,
    title: 'Finding Your Life Purpose',
    author: 'Anodea Judith',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
    rating: 4.7,
    duration: '25m',
    isLocked: true,
    reason: 'Uncover your passion and create a soul-aligned business.',
  },
];

export const freePrograms = [
  {
    id: '1',
    title: 'Getting Started with Mindvalley',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600',
    userCount: 92189,
    lessonCount: 10,
  },
  {
    id: '2',
    title: 'The 3 Most Important Questions',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    userCount: 68340,
    lessonCount: 8,
  },
];

export const todayMeditations = [
  {
    id: '1',
    title: 'Infiniprayer',
    author: 'Mahatria',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    rating: 4.6,
    duration: '1m',
    category: 'UNDER 5 MINS',
  },
  {
    id: '2',
    title: 'Phase 1: Compassion',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=400',
    rating: 4.7,
    duration: '5m',
    category: 'UNDER 10 MINS',
  },
  {
    id: '3',
    title: 'Manifesting Abundance',
    author: 'Regan Hillyer',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400',
    rating: 4.8,
    duration: '19m',
    category: 'UNDER 20 MINS',
  },
];

export const popularPrograms = [
  {
    id: '1',
    title: 'The Silva Ultramind System',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
    userCount: 361877,
    lessonCount: 29,
  },
  {
    id: '2',
    title: 'Superbrain',
    author: 'Jim Kwik',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600',
    userCount: 2725900,
    lessonCount: 34,
  },
];

export const trendingPrograms = [
  {
    id: '1',
    rank: 1,
    title: 'The Silva Ultramind System',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300',
  },
  {
    id: '2',
    rank: 2,
    title: 'Duality',
    author: 'Jeffrey Allen',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300',
  },
  {
    id: '3',
    rank: 3,
    title: 'The Art of Manifesting',
    author: 'Regan Hillyer',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300',
  },
];

export const categories = [
  { id: '1', name: 'Mind', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400', color: '#3B82F6' },
  { id: '2', name: 'Soul', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400', color: '#F59E0B' },
  { id: '3', name: 'Body', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', color: '#10B981' },
  { id: '4', name: 'Entrepreneurship', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', color: '#EF4444' },
  { id: '5', name: 'Career Growth', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', color: '#8B5CF6' },
  { id: '6', name: 'Relationships', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400', color: '#EC4899' },
];

export const dailyShorts = [
  {
    id: '1',
    title: 'Why Is Dating So Hard?',
    author: 'Neelam Verma',
    authorDescription: 'Relationship coach & author',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300',
    authorImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100',
  },
  {
    id: '2',
    title: 'The Transformational Leader',
    author: 'Monty Moran',
    authorDescription: 'Former CEO of Chipotle & leadership expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: '3',
    title: 'Why Everything You Do Matters',
    author: 'Kristina Mänd-Lakhiani',
    authorDescription: 'Co-founder of Mindvalley & personal growth expert',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    id: '4',
    title: 'The Secret To Leveling Up Your Success',
    author: 'Linda Clemons',
    authorDescription: 'World-renowned nonverbal communications expert',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300',
    authorImage: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100',
  },
  {
    id: '5',
    title: 'What is EFT Tapping?',
    author: 'Jennifer Partridge',
    authorDescription: 'Founder of Dream Awake Tapping & tapping expert',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300',
    authorImage: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100',
  },
];

export const topRatedMeditations = [
  {
    id: '1',
    title: 'Dissolving Memories',
    author: 'Gabriel Loynaz',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=200',
    rating: 4.9,
    duration: '15m',
    isLocked: true,
  },
  {
    id: '2',
    title: 'The Great Vision',
    author: 'Gabriel Loynaz',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=200',
    rating: 4.9,
    duration: '20m',
    isLocked: true,
  },
  {
    id: '3',
    title: 'Ocean Healing',
    author: 'Gabriel Loynaz',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200',
    rating: 4.9,
    duration: '12m',
    isLocked: true,
  },
  {
    id: '4',
    title: 'Third Eye Chakra',
    author: 'Gabriel Loynaz',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200',
    rating: 4.9,
    duration: '18m',
    isLocked: true,
  },
];

export const meditationCategories = [
  { id: '1', name: 'RELAX', image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=400' },
  { id: '2', name: 'CLARITY OF VISION', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400' },
  { id: '3', name: 'ABUNDANCE', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400' },
  { id: '4', name: 'SLEEP', image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=400' },
];

export const soundCategories = [
  { id: '1', name: 'ALTERED STATES', image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400' },
  { id: '2', name: 'NATURE', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400' },
  { id: '3', name: 'FOCUS', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400' },
];

export const evePrompts = [
  "I'm feeling stressed, tired, or seeking better sleep.",
  "I'm looking to lose weight and improve my fitness.",
  "I want to develop a growth mindset and increase my self-confidence.",
  "I want to enhance my leadership skills, build a strong team and inspire others.",
];

// L3/L4 Subscriber Data

export const continuePrograms = [
  {
    id: '1',
    title: 'Centering Exercise 1',
    programName: 'THE SILVA ULTRAMIND SYSTEM',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600',
    duration: '27m',
    completedLessons: 1,
    totalLessons: 29,
  },
  {
    id: '2',
    title: 'Introduction to Manifestation',
    programName: 'MANIFESTING MASTERY',
    author: 'Regan Hillyer',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600',
    duration: '18m',
    completedLessons: 0,
    totalLessons: 52,
  },
];

export const premiumPrograms = [
  {
    id: '1',
    title: 'AI Accelerator',
    author: 'Vishen, Vykintas Glodenis, Iman Oubou',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    userCount: 1007,
    lessonCount: 11,
  },
  {
    id: '2',
    title: 'AI Mastery',
    author: 'Vishen, Vykintas',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600',
    userCount: 1765,
    lessonCount: 5,
  },
];

export const favorites = [
  {
    id: '1',
    title: 'Duality',
    author: 'Jeffrey Allen',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600',
    type: 'quest' as const,  // rectangular landscape
  },
  {
    id: '2',
    title: 'Super Brain',
    author: 'Jim Kwik',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600',
    type: 'quest' as const,  // rectangular landscape
  },
  {
    id: '3',
    title: "Yogi's Guide to Joy",
    author: 'Sadhguru',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
    type: 'meditation' as const,  // square
  },
  {
    id: '4',
    title: 'Leo',
    author: 'Gabriel Loynaz',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
    type: 'sound' as const,  // circular
  },
];

export const growthGoalsPrograms = [
  {
    id: '1',
    title: 'Money EQ',
    author: 'Ken Honda',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600',
    userCount: 119577,
    lessonCount: 21,
    tag: 'Growing Your Income',
  },
  {
    id: '2',
    title: 'Be Extraordinary',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    userCount: 250000,
    lessonCount: 30,
    tag: 'Personal Growth',
  },
];

export const featuredBanners = [
  {
    id: '1',
    title: 'Breath Connection',
    subtitle: 'Tap into limitless energy and clarity with breathwork',
    label: 'MEDITATION OF THE WEEK',
    buttonText: 'Meditate now',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  },
  {
    id: '2',
    title: 'Weekly Challenge',
    subtitle: 'Complete 7 days of meditation',
    label: 'CHALLENGE',
    buttonText: 'Join now',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800',
  },
];

export const pickedForYou = [
  {
    id: '1',
    title: 'Getting Started with Mindvalley',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600',
    lessonCount: 10,
  },
];

export const featuredAuthors = [
  { id: '1', name: 'Neale Donald Walsch', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  { id: '2', name: 'JJ Virgin', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
  { id: '3', name: 'Emily Fletcher', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200' },
  { id: '4', name: 'Paul McKenna', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' },
];

export const meditationsForGoal = {
  goal: 'Better Sleep',
  meditations: [
    {
      id: '1',
      title: 'Releasing Anxiety',
      author: 'Brett Bevell',
      image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=400',
      rating: 4.3,
      duration: '3m',
    },
    {
      id: '2',
      title: 'Sleep Inducing Body Scan',
      author: 'House of Wellbeing',
      image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=400',
      rating: 4.7,
      duration: '25m',
    },
    {
      id: '3',
      title: 'Sink Back Into Deeper Sleep',
      author: 'House of Wellbeing',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400',
      rating: 4.6,
      duration: '2m',
    },
  ],
};

export const soundsForGoal = {
  goal: 'Focus',
  sounds: [
    {
      id: '1',
      title: 'Taurus',
      author: 'Gabriel Loynaz',
      image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
      rating: 4.9,
    },
    {
      id: '2',
      title: 'Aries',
      author: 'Gabriel Loynaz',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400',
      rating: 4.8,
    },
    {
      id: '3',
      title: 'Pisces',
      author: 'Gabriel Loynaz',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400',
      rating: 4.8,
    },
  ],
};

export const liveClasses = [
  {
    id: '1',
    title: 'Week 9: Live Q&A Call',
    host: 'Paul Mckenna',
    programName: 'HYPNOTHERAPIST',
    programLabel: 'Mindvalley certified',
    time: 'Today · 11:00pm - 12:00am',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
  },
  {
    id: '2',
    title: 'Meeting Intelligence Clone: Q&A/Workshop',
    host: 'Vykintas Glodenis',
    programName: 'AI ACCELERATOR',
    programLabel: '',
    time: 'Today · 11:00pm - 12:00am',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
  },
  {
    id: '3',
    title: 'Forgiveness Ritual',
    host: 'Marie Diamond',
    programName: 'SPIRITUAL MASTERY',
    programLabel: '',
    time: 'Today · 11:00pm - 12:30am',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
  },
];

// Quest/Program Lessons Data

export interface QuestLesson {
  id: string;
  lessonNumber: number;
  title: string;
  author: string;
  duration: string;
  image: string;
  isCompleted: boolean;
  videoUrl?: string;
}

export interface QuestWeek {
  id: string;
  weekNumber: number;
  title: string;
  lessons: QuestLesson[];
}

export interface Quest {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  image: string;
  totalLessons: number;
  completedLessons: number;
  weeks: QuestWeek[];
  description: string;
}

export const questsData: Record<string, Quest> = {
  'silva-ultramind': {
    id: 'silva-ultramind',
    title: 'The Silva Ultramind System',
    subtitle: 'By José Silva & Vishen',
    author: 'Vishen',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800',
    totalLessons: 29,
    completedLessons: 1,
    description: 'Welcome to the second day of your Silva Ultramind journey. Today you will learn to access deeper levels of the mind where you can program yourself for success.',
    weeks: [
      {
        id: 'week1',
        weekNumber: 1,
        title: 'Week 1: The Foundations of the Silva Method',
        lessons: [
          {
            id: 'l1',
            lessonNumber: 1,
            title: 'Welcome to Silva Ultramind',
            author: 'Vishen',
            duration: '15 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: true,
          },
          {
            id: 'l2',
            lessonNumber: 2,
            title: 'Tap into Alpha with the Centering Exercise',
            author: 'Vishen',
            duration: '27 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
          {
            id: 'l3',
            lessonNumber: 3,
            title: 'The Power of Dynamic Meditation',
            author: 'Vishen',
            duration: '22 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
          {
            id: 'l4',
            lessonNumber: 4,
            title: 'Centering Exercise 2',
            author: 'Vishen',
            duration: '25 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
        ],
      },
      {
        id: 'week2',
        weekNumber: 2,
        title: 'Week 2: The Alpha & Theta States',
        lessons: [
          {
            id: 'l5',
            lessonNumber: 5,
            title: 'Understanding Brain Wave States',
            author: 'Vishen',
            duration: '18 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
          {
            id: 'l6',
            lessonNumber: 6,
            title: 'The Three Scenes Technique',
            author: 'Vishen',
            duration: '24 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
          {
            id: 'l7',
            lessonNumber: 7,
            title: 'Centering Exercise 3',
            author: 'Vishen',
            duration: '23 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
        ],
      },
      {
        id: 'week3',
        weekNumber: 3,
        title: 'Week 3: Visualization & Mental Imagery',
        lessons: [
          {
            id: 'l8',
            lessonNumber: 8,
            title: 'The Power of Visualization',
            author: 'Vishen',
            duration: '20 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
          {
            id: 'l9',
            lessonNumber: 9,
            title: 'Creating Your Mental Screen',
            author: 'Vishen',
            duration: '19 mins',
            image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
            isCompleted: false,
          },
        ],
      },
    ],
  },
  'manifesting-mastery': {
    id: 'manifesting-mastery',
    title: 'Manifesting Mastery',
    author: 'Regan Hillyer',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800',
    totalLessons: 52,
    completedLessons: 0,
    description: 'Learn the art and science of manifesting your dreams into reality with proven techniques.',
    weeks: [
      {
        id: 'week1',
        weekNumber: 1,
        title: 'Week 1: Introduction to Manifestation',
        lessons: [
          {
            id: 'l1',
            lessonNumber: 1,
            title: 'What is Manifestation?',
            author: 'Regan Hillyer',
            duration: '18 mins',
            image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400',
            isCompleted: false,
          },
          {
            id: 'l2',
            lessonNumber: 2,
            title: 'The Law of Attraction',
            author: 'Regan Hillyer',
            duration: '22 mins',
            image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400',
            isCompleted: false,
          },
        ],
      },
    ],
  },
};

export const currentLessonMeditation = {
  type: 'MEDITATIONS',
  duration: '20m',
  title: 'The Silva Centering Exercise - Alpha',
  author: 'Vishen',
  image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400',
};

export const lessonTasks = [
  {
    id: '1',
    title: 'Practice the Silva Centering Exercise.',
    isCompleted: false,
  },
];
