// Resolve require() asset to a URI string that works with source={{ uri }}
import { Image as RNImage } from 'react-native';
const resolveAsset = (asset: any): string => {
  if (typeof asset === 'string') return asset;
  const resolved = RNImage.resolveAssetSource(asset);
  return resolved?.uri || '';
};

// Cover image assets
const coverImages = {
  silvaUltramind: resolveAsset(require('../../assets/covers/The_Silva_Ultramind_System.jpg')),
  superbrain: resolveAsset(require('../../assets/covers/Superbrain.png')),
  duality: resolveAsset(require('../../assets/covers/Duality.jpg')),
  wildfit: resolveAsset(require('../../assets/covers/Wildfit.png')),
  sixPhase: resolveAsset(require('../../assets/covers/The_6_Phase_Meditation.jpg')),
  fengShui: resolveAsset(require('../../assets/covers/Feng_Shui_for_Life.png')),
  beExtraordinary: resolveAsset(require('../../assets/covers/Be_Extraordinary.jpg')),
  manifestingMastery: resolveAsset(require('../../assets/covers/Manifesting_Mastery.jpg')),
  tenXFitness: resolveAsset(require('../../assets/covers/10X_Fitness.jpg')),
  yogiGuide: resolveAsset(require('../../assets/covers/A_Yogis_Guide_to_Joy.jpg')),
  moneyEQ: resolveAsset(require('../../assets/covers/Money_EQ.png')),
  speakInspire: resolveAsset(require('../../assets/covers/Speak_and_Inspire.png')),
  longevityBlueprint: resolveAsset(require('../../assets/covers/The_Longevity_Blueprint.png')),
  consciousParenting: resolveAsset(require('../../assets/covers/Conscious_Parenting_Mastery.png')),
  certifiedHypnotherapist: resolveAsset(require('../../assets/covers/Mindvalley_Certified_Hypnotherapist.jpg')),
  buildingBrand: resolveAsset(require('../../assets/covers/Building_an_Unstoppable_Brand.jpg')),
  gettingStarted: resolveAsset(require('../../assets/covers/Getting_Started_with_Mindvalley.jpg')),
  lifebook: resolveAsset(require('../../assets/covers/Lifebook.png')),
  artOfManifesting: resolveAsset(require('../../assets/covers/The_Art_of_Manifesting.png')),
  sleepMastery: 'https://assets.mindvalley.com/api/v1/assets/0d29391b-2610-4237-a9cd-8485a58fefb6.jpg',
  negotiateConfidence: resolveAsset(require('../../assets/covers/Negotiate_with_Confidence_Clarity_in_Every_Conversation.jpg')),
  lifebookMastery: resolveAsset(require('../../assets/covers/Lifebook_Mastery.jpg')),
};

// Meditation & sound cover images
const meditationCovers = {
  manifestingHealthWealthLove: resolveAsset(require('../../assets/meditation-covers/Manifesting_Health,_Wealth_&_Love.jpg')),
  releasingAnxiety: resolveAsset(require('../../assets/meditation-covers/Releasing_Anxiety.jpg')),
  sleepInducingBodyScan: resolveAsset(require('../../assets/meditation-covers/Sleep_Inducing_Body_Scan.jpg')),
  sinkBackIntoSleep: resolveAsset(require('../../assets/meditation-covers/Sink_Back_Into_Deeper_Sleep.jpg')),
  thirdEyeChakra: resolveAsset(require('../../assets/meditation-covers/Third_Eye_Chakra_Sounding_Intuition_&_Wisdom.jpg')),
  sixPhaseMeditation: resolveAsset(require('../../assets/meditation-covers/6-Phase_Meditation.jpg')),
  deepRelaxation: resolveAsset(require('../../assets/meditation-covers/Deep_Relaxation.jpg')),
  clarityOfVision: resolveAsset(require('../../assets/meditation-covers/Clarity_of_Vision_The_Path_to_Your_Dreams.jpg')),
  abundanceMeditation: resolveAsset(require('../../assets/meditation-covers/Abundance_Meditation.jpg')),
  profoundSleep: resolveAsset(require('../../assets/meditation-covers/Profound_Sleep.jpg')),
};

const profileAvatar = resolveAsset(require('../../assets/naresh-avatar.jpeg'));

// Mock data for Mindvalley app

export const user = {
  name: 'Naresh',
  fullName: 'Naresh Sanchana',
  email: 'nsanchana@gmail.com',
  avatar: profileAvatar,
  dayStreak: 0,
  lessonsCompleted: 15,
  meditatedMinutes: 27,
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
  { id: '1', title: 'Deeper Connection with Your Partner', color: '#E040FB' },
  { id: '2', title: 'Getting Fitter', color: '#E040FB' },
  { id: '3', title: 'Growing Your Finances', color: '#F5A623' },
  { id: '4', title: 'Better Parenting', color: '#E040FB' },
  { id: '5', title: 'Improving Overall Health', color: '#00D4AA' },
  { id: '6', title: 'Better Sleep', color: '#00D4AA' },
];

export const eveRecommendations = [
  {
    id: '1',
    type: 'lesson' as const,
    title: 'Rewire Your Belief Systems to Overcome Your Fears',
    author: 'The Science of Personal Branding',
    image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg',
    rating: 4.9,
    duration: '19m',
    reason: 'Boost confidence to launch your business by overcoming limiting beliefs.',
  },
  {
    id: '2',
    type: 'lesson' as const,
    title: 'Discover Your Ideal Client',
    author: 'The Science of Personal Branding',
    image: 'https://assets.mindvalley.com/api/v1/assets/a6899b95-0f71-4403-9ac7-04edd0cdd722.jpg',
    rating: 4.8,
    duration: '22m',
    reason: 'Focus your efforts on those who resonate with your soul-aligned business.',
  },
  {
    id: '3',
    type: 'meditation' as const,
    title: 'Finding Your Life Purpose',
    author: 'Anodea Judith',
    image: 'https://assets.mindvalley.com/api/v1/assets/169e289b-9dde-4956-993e-b318426ea7fe.jpg',
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
    image: coverImages.gettingStarted,
    userCount: 92189,
    lessonCount: 10,
  },
  {
    id: '2',
    title: 'The 3 Most Important Questions',
    author: 'Vishen',
    image: 'https://assets.mindvalley.com/api/v1/assets/ab92e6aa-6f33-4822-a3cc-d7cbdce5b688.png',
    userCount: 68340,
    lessonCount: 8,
  },
];

export const todayMeditations = [
  {
    id: '1',
    title: 'Infiniprayer',
    author: 'Mahatria',
    image: 'https://assets.mindvalley.com/api/v1/assets/0d29391b-2610-4237-a9cd-8485a58fefb6.jpg',
    rating: 4.6,
    duration: '1m',
    category: 'UNDER 5 MINS',
  },
  {
    id: '2',
    title: 'Phase 2: Gratitude',
    author: 'Vishen',
    image: 'https://assets.mindvalley.com/api/v1/assets/ab92e6aa-6f33-4822-a3cc-d7cbdce5b688.png',
    rating: 4.7,
    duration: '9m',
    category: 'UNDER 10 MINS',
  },
  {
    id: '3',
    title: 'Manifesting Health, Wealth & Love',
    author: 'Sarah Prout',
    image: meditationCovers.manifestingHealthWealthLove,
    rating: 4.8,
    duration: '17m',
    category: 'UNDER 20 MINS',
  },
];

export const popularPrograms = [
  {
    id: '1',
    title: 'The Silva Ultramind System',
    author: 'Vishen',
    image: coverImages.silvaUltramind,
    userCount: 361877,
    lessonCount: 29,
  },
  {
    id: '2',
    title: 'Superbrain',
    author: 'Jim Kwik',
    image: coverImages.superbrain,
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
    image: coverImages.silvaUltramind,
  },
  {
    id: '2',
    rank: 2,
    title: 'Duality',
    author: 'Jeffrey Allen',
    image: coverImages.duality,
  },
  {
    id: '3',
    rank: 3,
    title: 'Wildfit',
    author: 'Eric Edmeades',
    image: coverImages.wildfit,
  },
];

export const categories = [
  { id: '1', name: 'Mind', image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg', color: '#3B82F6' },
  { id: '2', name: 'Soul', image: 'https://assets.mindvalley.com/api/v1/assets/aa4f066e-434f-4fdb-b013-bb15668b543b.jpg', color: '#F59E0B' },
  { id: '3', name: 'Body', image: 'https://assets.mindvalley.com/api/v1/assets/f043a23b-9e0a-48b4-a9e3-8577db7591d1.jpg', color: '#10B981' },
  { id: '4', name: 'Entrepreneurship', image: 'https://assets.mindvalley.com/api/v1/assets/a6899b95-0f71-4403-9ac7-04edd0cdd722.jpg', color: '#EF4444' },
  { id: '5', name: 'Career Growth', image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg', color: '#8B5CF6' },
  { id: '6', name: 'Relationships', image: 'https://assets.mindvalley.com/api/v1/assets/626cb88e-773e-40b5-b860-97711d1ac3ac.jpg', color: '#EC4899' },
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
    image: 'https://assets.mindvalley.com/api/v1/assets/0d29391b-2610-4237-a9cd-8485a58fefb6.jpg',
    rating: 4.9,
    duration: '15m',
    isLocked: true,
  },
  {
    id: '2',
    title: 'The Great Vision',
    author: 'Gabriel Loynaz',
    image: 'https://assets.mindvalley.com/api/v1/assets/ab92e6aa-6f33-4822-a3cc-d7cbdce5b688.png',
    rating: 4.9,
    duration: '20m',
    isLocked: true,
  },
  {
    id: '3',
    title: 'Ocean Healing',
    author: 'Gabriel Loynaz',
    image: 'https://assets.mindvalley.com/api/v1/assets/626cb88e-773e-40b5-b860-97711d1ac3ac.jpg',
    rating: 4.9,
    duration: '12m',
    isLocked: true,
  },
  {
    id: '4',
    title: 'Third Eye Chakra',
    author: 'Gabriel Loynaz',
    image: meditationCovers.thirdEyeChakra,
    rating: 4.9,
    duration: '18m',
    isLocked: true,
  },
];

export const meditationCategories = [
  { id: '1', name: 'RELAX', image: meditationCovers.deepRelaxation },
  { id: '2', name: 'CLARITY OF VISION', image: meditationCovers.clarityOfVision },
  { id: '3', name: 'ABUNDANCE', image: meditationCovers.abundanceMeditation },
  { id: '4', name: 'SLEEP', image: meditationCovers.profoundSleep },
];

export const soundCategories = [
  { id: '1', name: 'ALTERED STATES', image: 'https://assets.mindvalley.com/api/v1/assets/aa4f066e-434f-4fdb-b013-bb15668b543b.jpg' },
  { id: '2', name: 'NATURE', image: 'https://assets.mindvalley.com/api/v1/assets/3a88f8af-7697-4c23-9ce6-6f89d6fcb718.jpg' },
  { id: '3', name: 'FOCUS', image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg' },
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
    lessonTitle: 'Centering Exercise 1',
    author: 'Vishen',
    image: coverImages.silvaUltramind,
    duration: '27m',
    progress: 0.034,
    lessonsCompleted: 1,
    totalLessons: 29,
  },
  {
    id: '2',
    title: 'Introduction to Manifestation',
    programName: 'DUALITY',
    lessonTitle: 'Introduction to Manifestation',
    author: 'Jeffrey Allen',
    image: coverImages.duality,
    duration: '18m',
    progress: 0,
    lessonsCompleted: 0,
    totalLessons: 30,
  },
];

export const premiumPrograms = [
  {
    id: '1',
    title: 'AI Mastery 2026',
    author: 'Vishen, Vykintas Glodenis, Domenic Ashburn, I...',
    image: 'https://assets.mindvalley.com/api/v1/assets/a6899b95-0f71-4403-9ac7-04edd0cdd722.jpg',
    userCount: 8,
    lessonCount: 0,
  },
  {
    id: '2',
    title: 'Certified Hypnotherapist',
    author: 'Ajit Nawalkha',
    image: coverImages.certifiedHypnotherapist,
    userCount: 2791,
    lessonCount: 8,
  },
];

export const favorites = [
  {
    id: '1',
    title: 'Duality',
    author: 'Jeffrey Allen',
    image: coverImages.duality,
  },
  {
    id: '2',
    title: 'Superbrain',
    author: 'Jim Kwik',
    image: coverImages.superbrain,
  },
  {
    id: '3',
    title: 'A Yogi\'s Guide to Joy',
    author: 'Sadhguru',
    image: coverImages.yogiGuide,
  },
];

export const growthGoalsPrograms = [
  {
    id: '1',
    title: 'The 6 Phase Meditation',
    author: 'Vishen',
    image: coverImages.sixPhase,
    userCount: 135584,
    lessonCount: 7,
    tag: 'Forgiveness',
  },
  {
    id: '2',
    title: 'Feng Shui for Life',
    author: 'Marie Diamond',
    image: coverImages.fengShui,
    userCount: 115975,
    lessonCount: 30,
    tag: 'Manifesting',
  },
];

export const featuredBanners = [
  {
    id: '1',
    title: 'Negotiate with Confidence',
    subtitle: 'Speak with clarity. Set boundaries.\nWin conversations that matter.',
    label: 'QUEST OF THE WEEK',
    buttonText: 'Explore the quest',
    author: 'Kwame Christian',
    image: coverImages.negotiateConfidence,
  },
  {
    id: '2',
    title: 'Weekly Challenge',
    subtitle: 'Complete 7 days of meditation',
    label: 'CHALLENGE',
    buttonText: 'Join now',
    author: '',
    image: 'https://assets.mindvalley.com/api/v1/assets/aa4f066e-434f-4fdb-b013-bb15668b543b.jpg',
  },
];

export const pickedForYou = [
  {
    id: '1',
    title: 'Getting Started with Mindvalley',
    author: 'Vishen',
    image: coverImages.gettingStarted,
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
      image: meditationCovers.releasingAnxiety,
      rating: 4.3,
      duration: '3m',
    },
    {
      id: '2',
      title: 'Sleep Inducing Body Scan',
      author: 'House of Wellbeing',
      image: meditationCovers.sleepInducingBodyScan,
      rating: 4.7,
      duration: '25m',
    },
    {
      id: '3',
      title: 'Sink Back Into Deeper Sleep',
      author: 'House of Wellbeing',
      image: meditationCovers.sinkBackIntoSleep,
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
      image: 'https://assets.mindvalley.com/api/v1/assets/f043a23b-9e0a-48b4-a9e3-8577db7591d1.jpg',
      rating: 4.9,
    },
    {
      id: '2',
      title: 'Aries',
      author: 'Gabriel Loynaz',
      image: 'https://assets.mindvalley.com/api/v1/assets/626cb88e-773e-40b5-b860-97711d1ac3ac.jpg',
      rating: 4.8,
    },
    {
      id: '3',
      title: 'Pisces',
      author: 'Gabriel Loynaz',
      image: 'https://assets.mindvalley.com/api/v1/assets/ab92e6aa-6f33-4822-a3cc-d7cbdce5b688.png',
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
    image: coverImages.silvaUltramind,
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
            image: coverImages.silvaUltramind,
            isCompleted: true,
          },
          {
            id: 'l2',
            lessonNumber: 2,
            title: 'Tap into Alpha with the Centering Exercise',
            author: 'Vishen',
            duration: '27 mins',
            image: coverImages.silvaUltramind,
            isCompleted: false,
          },
          {
            id: 'l3',
            lessonNumber: 3,
            title: 'The Power of Dynamic Meditation',
            author: 'Vishen',
            duration: '22 mins',
            image: coverImages.silvaUltramind,
            isCompleted: false,
          },
          {
            id: 'l4',
            lessonNumber: 4,
            title: 'Centering Exercise 2',
            author: 'Vishen',
            duration: '25 mins',
            image: coverImages.silvaUltramind,
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
            image: coverImages.silvaUltramind,
            isCompleted: false,
          },
          {
            id: 'l6',
            lessonNumber: 6,
            title: 'The Three Scenes Technique',
            author: 'Vishen',
            duration: '24 mins',
            image: coverImages.silvaUltramind,
            isCompleted: false,
          },
          {
            id: 'l7',
            lessonNumber: 7,
            title: 'Centering Exercise 3',
            author: 'Vishen',
            duration: '23 mins',
            image: coverImages.silvaUltramind,
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
            image: coverImages.silvaUltramind,
            isCompleted: false,
          },
          {
            id: 'l9',
            lessonNumber: 9,
            title: 'Creating Your Mental Screen',
            author: 'Vishen',
            duration: '19 mins',
            image: coverImages.silvaUltramind,
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
    image: coverImages.manifestingMastery,
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
            image: coverImages.manifestingMastery,
            isCompleted: false,
          },
          {
            id: 'l2',
            lessonNumber: 2,
            title: 'The Law of Attraction',
            author: 'Regan Hillyer',
            duration: '22 mins',
            image: coverImages.manifestingMastery,
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
  image: coverImages.silvaUltramind,
};

export const lessonTasks = [
  {
    id: '1',
    title: 'Practice the Silva Centering Exercise.',
    isCompleted: false,
  },
];

// Pathways Collections data
export interface CollectionProgram {
  id: string;
  title: string;
  author: string;
  image: string;
  lessonCount: number;
  userCount: number;
  duration: string;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  gradientColors: string[];
  accentColor: string;
  programCount: number;
  lessonCount: number;
  icon: string;
  programs: CollectionProgram[];
  pricingSingle: string;
  pricingCollection: string;
  pricingAllAccess: string;
}

export const collections: Collection[] = [
  {
    id: 'mindset',
    name: 'Mindset',
    tagline: 'Peak Performance & Mental Mastery',
    gradientColors: ['#2d0b6e', '#4a1d8a', '#6b2fc7'],
    accentColor: '#9D5CFF',
    programCount: 7,
    lessonCount: 210,
    icon: '🧠',
    pricingSingle: '$49',
    pricingCollection: '$149/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'silva', title: 'The Silva Ultramind System', author: 'Vishen', image: coverImages.silvaUltramind, lessonCount: 29, userCount: 361877, duration: '29 lessons' },
      { id: 'superbrain', title: 'Superbrain', author: 'Jim Kwik', image: coverImages.superbrain, lessonCount: 34, userCount: 2725900, duration: '34 lessons' },
      { id: 'limitless', title: 'Becoming Limitless', author: 'Vishen Lakhiani', image: coverImages.beExtraordinary, lessonCount: 28, userCount: 180000, duration: '28 lessons' },
      { id: 'extraordinary', title: 'Be Extraordinary', author: 'Vishen', image: coverImages.beExtraordinary, lessonCount: 30, userCount: 250000, duration: '30 lessons' },
      { id: 'lifebook', title: 'Lifebook Online', author: 'Jon & Missy Butcher', image: coverImages.lifebook, lessonCount: 35, userCount: 145000, duration: '35 lessons' },
    ],
  },
  {
    id: 'manifesting',
    name: 'Manifesting',
    tagline: 'Law of Attraction & Abundance',
    gradientColors: ['#451a03', '#92400e', '#d97706'],
    accentColor: '#fbbf24',
    programCount: 5,
    lessonCount: 155,
    icon: '✨',
    pricingSingle: '$49',
    pricingCollection: '$129/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'manifesting', title: 'The Art of Manifesting', author: 'Regan Hillyer', image: coverImages.artOfManifesting, lessonCount: 52, userCount: 98000, duration: '52 lessons' },
      { id: 'duality', title: 'Duality', author: 'Jeffrey Allen', image: coverImages.duality, lessonCount: 30, userCount: 220000, duration: '30 lessons' },
      { id: 'money-eq', title: 'Money EQ', author: 'Ken Honda', image: coverImages.moneyEQ, lessonCount: 21, userCount: 119577, duration: '21 lessons' },
    ],
  },
  {
    id: 'longevity',
    name: 'Longevity',
    tagline: 'Health, Fitness & Longevity Science',
    gradientColors: ['#0f1a4a', '#1e3a8a', '#2563eb'],
    accentColor: '#60a5fa',
    programCount: 5,
    lessonCount: 130,
    icon: '💪',
    pricingSingle: '$49',
    pricingCollection: '$129/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'fitness', title: '10x Fitness', author: 'Lorenzo Delano & Ronan Diego', image: coverImages.tenXFitness, lessonCount: 26, userCount: 175000, duration: '26 lessons' },
      { id: 'sleep', title: 'Sleep Mastery', author: 'Dr. Michael Breus', image: coverImages.sleepMastery, lessonCount: 22, userCount: 88000, duration: '22 lessons' },
      { id: 'longevity', title: 'Longevity Blueprint', author: 'Ben Greenfield', image: coverImages.longevityBlueprint, lessonCount: 24, userCount: 62000, duration: '24 lessons' },
    ],
  },
  {
    id: 'love-family',
    name: 'Love & Family',
    tagline: 'Relationships, Parenting & Connection',
    gradientColors: ['#4a044e', '#86198f', '#c026d3'],
    accentColor: '#f0abfc',
    programCount: 6,
    lessonCount: 180,
    icon: '❤️',
    pricingSingle: '$49',
    pricingCollection: '$139/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'parenting', title: 'Conscious Parenting', author: 'Dr. Shefali Tsabary', image: coverImages.consciousParenting, lessonCount: 28, userCount: 95000, duration: '28 lessons' },
      { id: 'relationship', title: 'The Relationship Expert', author: 'Neelam Verma', image: 'https://assets.mindvalley.com/api/v1/assets/626cb88e-773e-40b5-b860-97711d1ac3ac.jpg', lessonCount: 30, userCount: 72000, duration: '30 lessons' },
      { id: 'masculine', title: 'Masculine Feminine Connection', author: 'Masculine-Feminine School', image: 'https://assets.mindvalley.com/api/v1/assets/aa4f066e-434f-4fdb-b013-bb15668b543b.jpg', lessonCount: 25, userCount: 58000, duration: '25 lessons' },
    ],
  },
  {
    id: 'entrepreneur',
    name: 'Exponential Entrepreneur',
    tagline: 'Business, Leadership & Performance',
    gradientColors: ['#0f0f1a', '#1a2540', '#1e3a5f'],
    accentColor: '#93c5fd',
    programCount: 6,
    lessonCount: 165,
    icon: '🚀',
    pricingSingle: '$49',
    pricingCollection: '$149/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'brand', title: 'Building an Unstoppable Brand', author: 'Jeffrey Perlman', image: coverImages.buildingBrand, lessonCount: 19, userCount: 23448, duration: '19 lessons' },
      { id: 'leader', title: 'The Transformational Leader', author: 'Monty Moran', image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg', lessonCount: 16, userCount: 14452, duration: '16 lessons' },
      { id: 'ai', title: 'AI Accelerator', author: 'Vishen & Vykintas Glodenis', image: 'https://assets.mindvalley.com/api/v1/assets/a6899b95-0f71-4403-9ac7-04edd0cdd722.jpg', lessonCount: 11, userCount: 307006, duration: '11 lessons' },
    ],
  },
  {
    id: 'speaking',
    name: 'Speaking & Authorship',
    tagline: 'Communication, Writing & Influence',
    gradientColors: ['#052e16', '#14532d', '#166534'],
    accentColor: '#4ade80',
    programCount: 4,
    lessonCount: 110,
    icon: '🎙️',
    pricingSingle: '$49',
    pricingCollection: '$119/yr',
    pricingAllAccess: '$499/yr',
    programs: [
      { id: 'speak', title: 'Speak & Inspire', author: 'Lisa Nichols', image: coverImages.speakInspire, lessonCount: 28, userCount: 67000, duration: '28 lessons' },
      { id: 'writing', title: 'The Art of Storytelling', author: 'Michael Hauge', image: 'https://assets.mindvalley.com/api/v1/assets/afd1e11c-cf1d-4c19-a853-abc758da55e9.jpg', lessonCount: 20, userCount: 42000, duration: '20 lessons' },
    ],
  },
];
