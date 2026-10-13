import heartIcon from './assets/icons/heart.svg'
import savingsIcon from './assets/icons/savings.svg'
import workOutlineIcon from './assets/icons/work-outline.svg'
import libraryBooksIcon from './assets/icons/library-books.svg'
import gppGoodIcon from './assets/icons/gpp-good.svg'
import autoAwesomeIcon from './assets/icons/auto-awesome.svg'
import flareIcon from './assets/icons/flare.svg'
import tagFacesIcon from './assets/icons/tag-faces.svg'

export type BuffKey =
  | 'Love'
  | 'Wealth'
  | 'Career'
  | 'Study'
  | 'Protection'
  | 'Luck'
  | 'Confidence'
  | 'General'

export type Screen =
  | 'intro'
  | 'input'
  | 'loading'
  | 'addons'
  | 'printing'
  | 'slip'
  | 'safety'

export interface BuffDef {
  key: BuffKey
  icon: string
  iconBg: string
  points: number
}

export const BUFFS: BuffDef[] = [
  { key: 'Love', icon: heartIcon, iconBg: '#e8c0d8', points: 8 },
  { key: 'Wealth', icon: savingsIcon, iconBg: '#f5d88a', points: 14 },
  { key: 'Career', icon: workOutlineIcon, iconBg: '#d4b896', points: 12 },
  { key: 'Study', icon: libraryBooksIcon, iconBg: '#baec9d', points: 9 },
  { key: 'Protection', icon: gppGoodIcon, iconBg: '#b8ccf0', points: 10 },
  { key: 'Luck', icon: autoAwesomeIcon, iconBg: '#b8e8c0', points: 15 },
  { key: 'Confidence', icon: flareIcon, iconBg: '#f6a4b4', points: 11 },
  { key: 'General', icon: tagFacesIcon, iconBg: '#a8d8e8', points: 7 },
]

export interface LoadoutItem {
  id: string
  origin: string
  title: string
  points: number
  description: string
  buffs: BuffKey[]
}

export const LOADOUT: LoadoutItem[] = [
  {
    id: 'red',
    origin: 'ORIGIN: CHINA',
    title: 'WEAR SOMETHING RED',
    points: 12,
    description: 'Red is associated with luck, prosperity and celebration.',
    buffs: ['Luck', 'Wealth', 'Confidence'],
  },
  {
    id: 'eye',
    origin: 'ORIGIN: MEDITERRANEAN + WEST ASIAN',
    title: 'CARRY AN EVIL EYE CHARM PROTECTION',
    points: 10,
    description:
      'Protective eye symbols have been used across multiple cultures against the evil eye.',
    buffs: ['Protection', 'Love'],
  },
  {
    id: 'wood',
    origin: 'ORIGIN: MULTIPLE TRADITIONS',
    title: 'KNOCK ON WOOD',
    points: 9,
    description: 'Versions of this practice appear across several cultures.',
    buffs: ['General', 'Career', 'Study'],
  },
  {
    id: 'threshold',
    origin: 'ORIGIN: MULTIPLE TRADITIONS',
    title: 'CROSS A THRESHOLD WITH INTENTION',
    points: 11,
    description: 'Marking a transition can turn a small action into a fresh beginning.',
    buffs: ['Career', 'Study', 'Confidence'],
  },
  {
    id: 'coin',
    origin: 'ORIGIN: MULTIPLE TRADITIONS',
    title: 'KEEP A LUCKY COIN CLOSE',
    points: 13,
    description: 'A small object can become a reminder to notice openings and act.',
    buffs: ['Wealth', 'Luck', 'Love'],
  },
  {
    id: 'pause',
    origin: 'ORIGIN: CONTEMPORARY RITUAL',
    title: 'TAKE THREE DELIBERATE BREATHS',
    points: 8,
    description: 'A pause creates room for attention before the next move.',
    buffs: ['Protection', 'Confidence', 'General'],
  },
  {
    id: 'shamrock',
    origin: 'ORIGIN: IRELAND',
    title: 'WEAR OR DISPLAY A SHAMROCK',
    points: 10,
    description: 'A public symbol of Ireland and St Patrick’s Day.',
    buffs: ['Luck', 'General', 'Love'],
  },
  {
    id: 'clover',
    origin: 'ORIGIN: IRELAND + EUROPE',
    title: 'LOOK FOR A FOUR-LEAF CLOVER',
    points: 14,
    description: 'A widely recognized emblem of good luck.',
    buffs: ['Luck', 'Confidence', 'Study'],
  },
  {
    id: 'horseshoe',
    origin: 'ORIGIN: BRITAIN + NORTH AMERICA',
    title: 'HANG A HORSESHOE OPEN-END UP',
    points: 11,
    description: 'A folk charm traditionally displayed to retain good luck.',
    buffs: ['Protection', 'Wealth', 'Career'],
  },
  {
    id: 'wishbone',
    origin: 'ORIGIN: NORTH AMERICA + EUROPE',
    title: 'MAKE A WISH WITH A WISHBONE',
    points: 12,
    description: 'A shared pulling custom associated with making a wish.',
    buffs: ['Love', 'Luck', 'General'],
  },
  {
    id: 'maneki-neko',
    origin: 'ORIGIN: JAPAN',
    title: 'PLACE A BECKONING CAT NEARBY',
    points: 13,
    description: 'A raised-paw figurine commonly displayed as a good-luck charm.',
    buffs: ['Wealth', 'Career', 'Luck'],
  },
  {
    id: 'daruma',
    origin: 'ORIGIN: JAPAN',
    title: 'SET ONE EYE ON A DARUMA GOAL DOLL',
    points: 15,
    description: 'A public goal-setting custom symbolizing perseverance.',
    buffs: ['Career', 'Study', 'Confidence'],
  },
  {
    id: 'nazar',
    origin: 'ORIGIN: TURKEY',
    title: 'CARRY A BLUE EYE BEAD',
    points: 12,
    description: 'A protective craft object worn or displayed against the evil eye.',
    buffs: ['Protection', 'Love', 'General'],
  },
  {
    id: 'red-envelope',
    origin: 'ORIGIN: CHINA + DIASPORA',
    title: 'CARRY A RED ENVELOPE',
    points: 13,
    description: 'A Lunar New Year custom associated with wishes for good fortune.',
    buffs: ['Wealth', 'Love', 'Luck'],
  },
  {
    id: 'bokjumeoni',
    origin: 'ORIGIN: SOUTH KOREA',
    title: 'CARRY A BOKJUMEONI FORTUNE POUCH',
    points: 14,
    description: 'A traditional New Year pouch whose name means fortune pouch.',
    buffs: ['Wealth', 'Protection', 'General'],
  },
  {
    id: 'twelve-grapes',
    origin: 'ORIGIN: SPAIN',
    title: 'COUNT TWELVE GRAPES',
    points: 9,
    description: 'A New Year’s Eve custom performed at midnight.',
    buffs: ['Luck', 'Love', 'General'],
  },
  {
    id: 'first-footing',
    origin: 'ORIGIN: SCOTLAND',
    title: 'BE THE FIRST FRIEND THROUGH THE DOOR',
    points: 10,
    description: 'A Hogmanay custom of arriving first with a small symbolic gift.',
    buffs: ['Love', 'Career', 'Confidence'],
  },
  {
    id: 'pomegranate',
    origin: 'ORIGIN: GREECE',
    title: 'PLACE A POMEGRANATE BY THE DOOR',
    points: 12,
    description: 'A New Year symbol associated with abundance and good fortune.',
    buffs: ['Wealth', 'Protection', 'General'],
  },
  {
    id: 'round-fruits',
    origin: 'ORIGIN: PHILIPPINES',
    title: 'SET OUT ROUND FRUITS',
    points: 10,
    description: 'A New Year table custom whose round shapes suggest prosperity.',
    buffs: ['Wealth', 'Love', 'General'],
  },
  {
    id: 'lentils',
    origin: 'ORIGIN: BRAZIL',
    title: 'SHARE A SPOONFUL OF LENTILS',
    points: 9,
    description: 'A New Year food custom associated with prosperity and renewal.',
    buffs: ['Wealth', 'Career', 'General'],
  },
]
