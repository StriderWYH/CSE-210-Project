// Global constants file
// export const PREDEFINED_TAGS = [
//     "Relax", "Study", "Cafe", "Meditation", "Sleep",
//     "Focus", "Nature", "Workout", "Ambient", "Chill"
// ];

import { TagProps } from "../types";

// Music styles (description generated by Deepseek)
export const MUSIC_STYLES: TagProps[] = [
  {
    type: 'R&B',
    description:
      'A genre rooted in African-American culture, blending jazz, gospel, and blues. Known for its soulful vocals and smooth rhythms.',
  },
  {
    type: 'Rock',
    description:
      'Characterized by electric guitars, strong beats, and often rebellious lyrics. Subgenres include classic rock, punk rock, and alternative rock.',
  },
  {
    type: 'Pop',
    description:
      'Focused on catchy melodies, simple structures, and broad appeal. Often features polished production and relatable lyrics.',
  },
  {
    type: 'Hip-Hop/Rap',
    description:
      'Originating from urban culture, it emphasizes rhythmic speech (rapping), beats, and often addresses social or personal issues.',
  },
  {
    type: 'Jazz',
    description:
      'Known for its improvisation, complex harmonies, and swing rhythms. Subgenres include bebop, smooth jazz, and fusion.',
  },
  {
    type: 'Country',
    description:
      'Rooted in American folk traditions, featuring storytelling lyrics, acoustic guitars, and themes of love, heartbreak, and rural life.',
  },
  {
    type: 'Electronic/Dance',
    description:
      'Created using synthesizers, drum machines, and digital production. Includes subgenres like house, techno, and EDM (Electronic Dance Music).',
  },
  {
    type: 'Classical',
    description:
      'A traditional genre with complex compositions, orchestral arrangements, and a focus on instrumental music. Includes works by composers like Beethoven and Mozart.',
  },
  {
    type: 'Reggae',
    description:
      'Originating in Jamaica, it features offbeat rhythms, bass-heavy grooves, and themes of social justice and spirituality.',
  },
  {
    type: 'Blues',
    description:
      'A foundational genre for many modern styles, characterized by its 12-bar structure, emotive vocals, and themes of hardship and resilience.',
  },
];

// Music ambiances (description generated by Deepseek)
export const MUSIC_AMBIANCES: TagProps[] = [
  {
    type: 'Relaxing',
    description:
      'Soft, soothing melodies and gentle rhythms perfect for unwinding or meditation. Often includes ambient, acoustic, or lo-fi music.',
  },
  {
    type: 'Energetic',
    description:
      'High-tempo beats and lively rhythms designed to boost energy and motivation. Commonly found in pop, dance, or workout playlists.',
  },
  {
    type: 'Romantic',
    description:
      'Emotional and heartfelt music, often featuring smooth vocals and tender melodies. Ideal for intimate moments or date nights.',
  },
  {
    type: 'Melancholic',
    description:
      'Reflective and somber tones that evoke deep emotions. Often includes slow tempos, minor keys, and introspective lyrics.',
  },
  {
    type: 'Uplifting',
    description:
      'Bright, positive, and inspiring music that lifts the spirit. Commonly features major keys, cheerful melodies, and empowering lyrics.',
  },
  {
    type: 'Mysterious',
    description:
      'Eerie, atmospheric, and enigmatic sounds that create a sense of intrigue. Often used in film scores or experimental genres.',
  },
  {
    type: 'Festive',
    description:
      'Joyful and celebratory music, perfect for parties and gatherings. Includes upbeat rhythms, catchy hooks, and vibrant instrumentation.',
  },
  {
    type: 'Epic',
    description:
      'Grand, powerful, and cinematic music that evokes a sense of awe and adventure. Often features orchestral arrangements and dramatic builds.',
  },
  {
    type: 'Dreamy',
    description:
      'Ethereal and hypnotic sounds that create a surreal or otherworldly atmosphere. Commonly found in ambient, shoegaze, or chillwave genres.',
  },
  {
    type: 'Nostalgic',
    description:
      'Music that evokes memories and a sense of longing for the past. Often includes retro sounds, vintage instruments, or classic hits.',
  },
];

export const MUSIC_SCENARIOS: TagProps[] = [
  {
    type: 'Meditation',
    description:
      'Slow, calming music with minimal instrumentation to help listeners focus on their breath and achieve a meditative state. Often includes ambient sounds, soft drones, or nature sounds like flowing water or birdsong.',
  },
  {
    type: 'Yoga Practice',
    description:
      'Gentle, flowing music with a steady rhythm to complement yoga poses and breathing exercises. Typically includes soft instrumental tracks, world music, or nature-inspired sounds.',
  },
  {
    type: 'After Work',
    description:
      'Soothing music to help listeners unwind after a long day. Often includes lo-fi beats, acoustic guitar, or piano melodies with a slow tempo.',
  },
  {
    type: 'Work Focus',
    description:
      'Background music that reduces stress while working or studying. Typically includes instrumental tracks, ambient music, or calming classical pieces.',
  },
  {
    type: 'Sleep Aid',
    description:
      'Soft, repetitive, and calming music to help listeners fall asleep. Often includes ambient soundscapes, white noise, or slow piano compositions.',
  },
  {
    type: 'Nature Sounds',
    description:
      'Music combined with natural sounds like rain, ocean waves, or forest ambiance to create a peaceful environment. Ideal for stress relief and grounding.',
  },
  {
    type: 'Mindfulness Session',
    description:
      'Music that encourages mindfulness and presence, often featuring slow tempos, gentle melodies, and minimal distractions. Commonly includes Tibetan singing bowls, soft chants, or ambient tones.',
  },
  {
    type: 'Spa Relaxation',
    description:
      'Relaxing music to enhance the spa-like experience, often featuring soothing instruments like harps, flutes, or soft strings. Can also include water sounds for added tranquility.',
  },
  {
    type: 'Calm Commute',
    description:
      'Calming music to help listeners relax during stressful commutes. Often includes ambient tracks, soft jazz, or instrumental playlists.',
  },
  {
    type: 'Healing Music',
    description:
      'Music designed to promote emotional and physical healing, often featuring slow, uplifting melodies and harmonious sounds. Commonly used in therapy or recovery settings.',
  },
];

export const PREDEFINED_TAGS = [
  ...MUSIC_STYLES.map((style) => style.type),
  ...MUSIC_AMBIANCES.map((ambiance) => ambiance.type),
  ...MUSIC_SCENARIOS.map((scenario) => scenario.type),
];
